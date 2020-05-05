describe('Proxy global class test with advanced cases:', () => {
  test('Wrapper for default object props test:', () => {
    const withDefaultValue = (target, defaultValue = 0) => {
      return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
      })
    }

    const point = withDefaultValue(
      {
        x: 22,
      },
      0,
    )

    expect(point.x).toBe(22)
    expect(point.y).toBe(0)
    expect(point.z).toBe(0)
  })

  test('With private props wrapper test:', () => {
    const withPrivateProps = (target, prefix = '_') => {
      return new Proxy(target, {
        has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
        ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
      })
    }

    const obj = withPrivateProps({
      a: 1,
      b: 3,
      _c: 4,
    })

    expect('_c' in obj).toBe(false) //has
    expect(obj['_c']).toBeUndefined() //get
    expect(Object.keys(obj).includes('_c')).toBe(false)
  })

  test('Indexed array test:', () => {
    const IndexedArray = new Proxy(Array, {
      construct(target, [args]) {
        const index = {}
        args.forEach((item) => (index[item.id] = item))

        return new Proxy(new target(...args), {
          get(arr, prop) {
            switch (prop) {
              case 'push':
                return (item) => {
                  index[item.id] = item
                  arr[prop].call(arr, item)
                }
              case 'findById':
                return (id) => index[id]
              default:
                return arr[prop]
            }
          },
        })
      },
    })

    const users = new IndexedArray([
      { id: 13, name: 'Jorik', age: 34 },
      { id: 32, name: 'Martin', age: 13 },
      { id: 14, name: 'Alex', age: 21 },
      { id: 15, name: 'Vasya', age: 14 },
      { id: 51, name: 'Zuzu', age: 15 },
    ])

    expect(users.length).toBe(5)
    expect(users.findById(13)).toEqual({ id: 13, name: 'Jorik', age: 34 })
    expect(users[1]).toEqual({ id: 32, name: 'Martin', age: 13 })
  })
})
