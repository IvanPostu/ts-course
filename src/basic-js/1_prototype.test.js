describe('Prototypes: ', () => {
  /**
   * Прототипы - определенный объект который присутствует внутри других объектов,
   *  вызывется по цепочке с верху вниз, тоесть если находим поля или функции на верхнем уровне,
   *  обращаемся к ним, если не находим идем вниз по прототипу и ищем либо поля либо функции.
   */

  const personWithoutToStringMethod = new Object({
    name: 'Maxim',
    age: 25,
    greet: function () {
      console.log('Greet')
    },
  })

  const personWithToStringMethod = {
    ...personWithoutToStringMethod,
    toString: function () {
      return 'Overrided to string method.'
    },
  }

  test('Need to return standart result form toString method for simple js object.', () => {
    expect(personWithoutToStringMethod.toString()).toBe(new Object().toString())
  })

  test('Need to return overrided result form toString method for simple js object.', () => {
    expect(personWithToStringMethod.toString()).toBe('Overrided to string method.')
  })
  /**  */
  describe(
    'To write function which gets array and return new array with every ' +
      'number multiplied by N',
    () => {
      test('Simple function.', () => {
        function multBy(arr, n) {
          return arr.map((num) => num * n)
        }

        const inputArray = [2, 3, 4, 5, 12]
        const resultArray = [4, 6, 8, 10, 24]

        expect(multBy(inputArray, 2)).toStrictEqual(resultArray)
      })

      test('Function for prototype. ', () => {
        Array.prototype.multBy = function (n) {
          return this.map((num) => num * n)
        }

        const inputArray = [2, 3, 4, 5, 12]
        const resultArray = [4, 6, 8, 10, 24]

        expect(inputArray.multBy(2)).toStrictEqual(resultArray)
      })
    },
  )
})
