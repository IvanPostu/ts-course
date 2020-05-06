describe('Map and WeakMap data structure test: ', () => {
  const people: object = {
    name: 'Morty',
    car: 'audi',
    country: 'Germany',
    friends: ['Marry', 'John'],
    work: 'QA',
    height: 1.88,
  }

  test('Map test methods: ', () => {
    const map: Map<any, any> = new Map(Object.entries(people))

    expect(map.size).toBe(6)

    expect(map.has('wife')).toBeFalsy()
    const newPointer = map.set('wife', 'Vasilisa')
    expect(newPointer === map).toBeTruthy()
    expect(map.has('wife')).toBeTruthy()

    const deleteSuccess = map.delete('wife')
    expect(deleteSuccess).toBeTruthy()

    const deleteUnsuccess = map.delete('wife')
    expect(deleteUnsuccess).toBeFalsy()

    map.set({ a: 'a' }, 13)
    expect(map.get({ a: 'a' })).not.toBe(13)
  })

  /**
   * get set has delete
   */
  test('WeakMap test methods: ', () => {
    const weakMap: WeakMap<any, any> = new Map(Object.entries(people))

    let rick: object | null = { name: 'Rick' }
    let morty: object | null = { name: 'Morty' }

    weakMap.set(rick, 31)
    weakMap.set(morty, 32)

    expect(weakMap.has(rick)).toBeTruthy()
    expect(weakMap.has(morty)).toBeTruthy()

    rick = null
    morty = null

    expect(weakMap.has(rick)).not.toBeTruthy()
    expect(weakMap.has(morty)).not.toBeTruthy()
  })
})
