/**
 *
 * Реализуйте и экспортируйте по умолчанию функцию reverseInt,
 * которая переворачивает цифры в переданном числе и возвращает новое число.
 *
 * reverseInt(13); // 31
 * reverseInt(-123); // -321
 * reverseInt(8900); // 98
 *
 */

function reverseInt(n: number): number {
  const isNegative = n < 0

  const num = new String(n).split('').reduce((acc, cur) => {
    return cur === '0' || cur === '-' ? acc : new String(cur).concat(acc)
  }, '')
  return isNegative ? Number.parseInt('-' + num) : Number.parseInt(num)
}

describe('reverseInt test module: ', () => {
  test('reverseInt test function: ', () => {
    // expect(reverseInt(13)).toBe(31)
    expect(reverseInt(-123)).toBe(-321)
    // expect(reverseInt(8900)).toBe(98)
  })
})
