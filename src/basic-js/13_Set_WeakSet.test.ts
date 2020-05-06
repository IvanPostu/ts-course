describe('Test methods for Set and WeakSet', () => {
  let users: Array<object | null> = []

  beforeAll(() => {
    users = [{ name: 'Rick' }, { name: 'Martin' }, { name: 'Rita' }]
  })

  /**
   * The WeakSet is weak, meaning references to objects in a WeakSet are held weakly.
   * If no other references to an object stored in the WeakSet exist,
   * those objects can be garbage collected.
   */
  test('WeakSet test methods:', () => {
    const visits: WeakSet<any> = new WeakSet()
    visits.add(users[0]).add(users[1]).add(users[2])
    visits.delete(users[1])
    expect(visits.has(users[0])).toBeTruthy()
    expect(visits.has(users[1])).not.toBeTruthy()
    expect(visits.has(users[2])).toBeTruthy()
  })

  test('Set test methods:', () => {
    const numbers = [1, 2, 2, 3, 3, 3, 3, 5, 7, 92, 32, 14, 15, 0, 0, 1]
    const numSet = new Set(numbers)

    expect(numSet.size).toBe(10)
    numSet.add(1)
    expect(numSet.size).toBe(10)

    expect(numSet.has(9999)).toBeFalsy()

    const oneIsDeleted = numSet.delete(1)
    expect(oneIsDeleted).toBeTruthy()
    expect(numSet.has(1)).not.toBeTruthy()
  })
})
