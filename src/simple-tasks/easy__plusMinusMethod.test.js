/**
 * Реализовать методы, которые в процессе выполнения строки
 * (2).plus(3).minus(1) дали бы на выходе 4.
 */

Number.prototype.plus = function (n) {
  return this + n
}

Number.prototype.minus = function (n) {
  return this - n
}

describe('Implement the methods .plus and .minus test: ', () => {
  test('Minus and plus test:', () => {
    Number.prototype.plus = function (n) {
      return this + n
    }

    Number.prototype.minus = function (n) {
      return this - n
    }

    expect((2).plus(3).minus(1)).toBe(4)

    Number.prototype.plus = null

    Number.prototype.minus = null
  })
})
