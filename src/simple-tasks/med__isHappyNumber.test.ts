function numToDigits(num: number): Array<number> {
  const result = [] as Array<number>

  for (let i = 10, div = num; div !== 0; i *= 10) {
    const currDigit = div % 10
    div = Math.floor(num / i)
    result.unshift(currDigit)
  }

  return result
}

function sumOfSquares(numbers: Array<number>) {
  return numbers.reduce((acc, cur) => acc + cur ** 2, 0)
}

/**
 *
 * Назовем счастливыми числами те, которые в результате ряда преобразований
 * вида "сумма квадратов цифр" превратятся в единицу. Например:
 *
 * 7   => 7^2 = 49,
 * 49  => 4^2 + 9^2 = 16 + 81 = 97,
 * 97  => 9^2 + 7^2 = 81 + 49 = 130,
 * 130 => 1^2 + 3^2 + 0^2 = 10,
 * 10  => 1^2 + 0^2 = 1.
 *
 *
 */

function isHappyNumber(num: number): boolean {
  let digits: Array<number> = []
  const sumValues: Set<number> = new Set()
  let currentValue = num

  while (!sumValues.has(currentValue)) {
    if (currentValue === 1) return true
    digits = []
    digits = numToDigits(currentValue)
    sumValues.add(currentValue)
    currentValue = sumOfSquares(digits)
  }

  return false
}

describe('is happy number module test: ', () => {
  test('Sum of squares function test: ', () => {
    expect(sumOfSquares([6, 4])).toBe(52)
  })

  test('numToDigits function test: ', () => {
    expect(numToDigits(5432)).toEqual([5, 4, 3, 2])
  })

  test('isHappyNumber function test: ', () => {
    expect(isHappyNumber(7)).toBeTruthy()
    expect(isHappyNumber(8)).not.toBeTruthy()
  })
})
