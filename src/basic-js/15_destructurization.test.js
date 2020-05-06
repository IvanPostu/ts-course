describe('Destructurization test: ', () => {
  test('Very simple destructurization for array test: ', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 1]
    const [a, b, ...rest] = arr

    expect(rest).toEqual([3, 4, 5, 6, 7, 1])
    expect(a === 1 && b === 2).toBeTruthy()
  })

  test('Very simple destructurization for object test: ', () => {
    const person = {
      name: 'Victor',
      age: 33,
      isSmart: true,
      weight: 66,
    }

    const { name, age, ...rest } = person

    expect(rest).toEqual({ isSmart: true, weight: 66 })
  })

  test('Calculate function destructurization test', () => {
    function calc(a, b) {
      return [a + b, a - b, a * b, a / b]
    }

    const [sum1, diff1, mul1, div1] = calc(0, 0)
    expect(div1).toBeNaN()

    expect(calc(10, 2)).toEqual([12, 8, 20, 5])
  })

  test('Person object destructurization test: ', () => {
    const person = {
      name: 'Vadim',
      age: 43,
      address: {
        city: 'New York',
        country: 'S.U.A.',
      },
    }

    const name = 'a'
    const {
      name: personName,
      address: { city, country: countryA },
    } = person

    expect(name).toBe('a')
    expect(personName).toBe(person.name)
    expect(city).toBe(person.address.city)
    expect(countryA).toBe(person.address.country)

    {
      const { name, ...anonymous } = person
      expect('name' in anonymous).toBeFalsy()
    }

    function personLogger({ name, age }) {
      console.log(`${name} - ${age}`)
    }

    let messageLog = ''
    const consoleLogSpy = jest.spyOn(global.console, 'log')
    consoleLogSpy.mockImplementation((log) => {
      messageLog = log
    })

    personLogger(person)
    expect(messageLog).toBe(`${person.name} - ${person.age}`)

    consoleLogSpy.mockRestore()
  })
})
