describe('Simple Object.create', () => {
  let person

  beforeEach(() => {
    person = Object.create(
      {
        calculateAgePlusOne() {
          return new Date().getFullYear() - this.dateOfBirth + 1
        },
      },
      {
        name: {
          value: 'Jim',
          enumerable: true,
          writable: false, //default
          configurable: true,
        },
        age: {
          get() {
            return new Date().getFullYear() - this.dateOfBirth
          },
        },
        dateOfBirth: {
          value: new Date('1998-9-24'),
          enumerable: false, //default
          writable: true,
          configurable: false, //default
        },
      },
    )
  })

  test('Test enumerable:', () => {
    const keys = []
    Object.entries(person).forEach(([key, val]) => {
      keys.push({ key, val })
    })

    expect(keys.length).toBe(1)
    expect(keys[0].key).toBe('name')
    expect(keys[0].val).toBe('Jim')
  })

  test('Test writable:', () => {
    person.dateOfBirth = new Date('1990-12-24')

    expect(person.dateOfBirth.getTime()).toBe(new Date('1990-12-24').getTime())
  })

  test('Write non writable field:', () => {
    let errorMesage = ''
    try {
      person.name = 'Zuzuka'
    } catch (e) {
      errorMesage = e.message
    }

    expect(
      errorMesage.includes("Cannot assign to read only property 'name' of object '#<Object>'"),
    ).toBeTruthy()
  })

  test('Delete field with prop. configurable is true: ', () => {
    delete person.name
    expect(person.name).toBeUndefined()
  })

  test('Delete field with prop. configurable is false: ', () => {
    let errorMessage = ''
    try {
      delete person.dateOfBirth
    } catch (e) {
      errorMessage = e.message
    }
    expect(errorMessage.includes("Cannot delete property 'dateOfBirth' of #<Object>")).toBeTruthy()
  })

  test('Test age: ', () => {
    expect(person.age).toBe(new Date().getFullYear() - person.dateOfBirth)
  })

  test('Use method from prototype: ', () => {
    expect(person.calculateAgePlusOne()).toBe(person.age + 1)
  })
})
