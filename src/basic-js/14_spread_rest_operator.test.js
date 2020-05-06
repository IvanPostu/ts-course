describe('Spread and Rest operator test: ', () => {
  test('Spread operator for array: ', () => {
    const colors1 = ['blue', 'red', 'orange', 'pink']
    const colors2 = ['green', 'teal', 'gray']

    const cloneColors1 = [colors1]

    expect(cloneColors1).not.toBe(colors1)

    const allColorsWithSpread = [...colors1, ...colors2]
    const allColorsWithConcat = colors1.concat(colors2)

    expect(allColorsWithSpread).not.toBe(allColorsWithConcat)

    for (let i = 0; i < allColorsWithConcat; i++) {
      expect(allColorsWithSpread[i]).toBe(allColorsWithConcat[i])
    }
  })

  test('Spread operator for JS objects: ', () => {
    const tomatoes1 = {
      Brockmire: 100,
      'What We Do in the Shadows': 96,
      'Mrs. America': 84,
      Riverdale: 58,
      'Motherland: Fort Salem': 22,
    }

    const tomatoes2 = {
      Riverdale: 99,
      'To the Stars': 79,
      'True History of the Kelly Gang': 78,
      'Beastie Boys Story': 94,
      'The Willoughbys': 89,
    }

    const totalTomatoes1 = { ...tomatoes1, ...tomatoes2 }
    const totalTomatoes2 = { ...tomatoes2, ...tomatoes1 }

    expect(totalTomatoes1.Riverdale).toBe(99)
    expect(totalTomatoes2.Riverdale).toBe(58)
  })

  test('Find max. number from array: ', () => {
    const maxNum = 99999
    const arr = [2, 223, 56, 113, 99, 71, 79, 209].concat([maxNum])

    /**
     * Using spread for array
     */
    expect(Math.max(...arr)).toBe(maxNum)

    /**
     * Using apply
     */
    expect(Math.max.apply(null, arr)).toBe(maxNum)
  })

  test('Rest operator test: ', () => {
    function sum(a, b, ...rest) {
      return a + b + rest.reduce((acc, curr) => acc + curr, 0)
    }

    const arr = [1, 2, 3, 4, 5, 6, 7, 1]
    const totalSum = sum(...arr)

    expect(totalSum).toBe(29)
  })

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
})
