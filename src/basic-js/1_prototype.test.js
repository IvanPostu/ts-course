describe('Прототипы: ', () => {
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

  test('Должен вернуть стандартный return от метода toString для простого js обьекта', () => {
    expect(personWithoutToStringMethod.toString()).toBe(new Object().toString())
  })

  test('Должен вернуть return от переопределенного метода toString для простого js обьекта', () => {
    expect(personWithToStringMethod.toString()).toBe('Overrided to string method.')
  })

  describe(`Написать функцию которая получает массив и возвращает новый массив с каждым элементом умноженным на n как аргумент функции. `, () => {
    test(`В виде простой функции. `, () => {
      function multBy(arr, n) {
        return arr.map((num) => num * n)
      }

      const inputArray = [2, 3, 4, 5, 12]
      const resultArray = [4, 6, 8, 10, 24]

      expect(multBy(inputArray, 2)).toStrictEqual(resultArray)
    })

    test(`В виде функции для прототипа. `, () => {
      Array.prototype.multBy = function (n) {
        return this.map((num) => num * n)
      }

      const inputArray = [2, 3, 4, 5, 12]
      const resultArray = [4, 6, 8, 10, 24]

      expect(inputArray.multBy(2)).toStrictEqual(resultArray)
    })
  })
})
