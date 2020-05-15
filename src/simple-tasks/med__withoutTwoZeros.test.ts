/**
 *
 * Реализуйте и экспортируйте по умолчанию функцию,
 * которая принимает на вход два аргумента - количество нулей и количество единиц,
 * и определяет сколько есть способов размещения этих нулей и единиц так,
 * что бы не было двух нулей идущих подряд.
 *
 * Например, определим все способы размещения двух нулей и двух единиц.
 * Существует шесть возможных способов размещения: 0011, 0101, 0110, 1001, 1010, 1100.
 * В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100.
 * Вычитаем их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3.
 *
 */

const factorial = (num: number) => {
  let acc = 1
  while (num > 0) {
    acc *= num
    num--
  }
  return acc
}
const withoutTwoZeros = (zeroCount: number, oneCount: number) => {
  const func = (n: number, k: number) => {
    return factorial(n) / (factorial(k) * factorial(n - k))
  }
  if (zeroCount === 0) {
    return 1
  }
  if (zeroCount === 1) {
    return oneCount + 1
  }
  if (zeroCount - oneCount >= 2) {
    return 0
  }
  return func(oneCount + 1, zeroCount)
}

describe('withoutTwoZeros module: ', () => {
  test('withoutTwoZeros function test: ', () => {
    expect(withoutTwoZeros(2, 2)).toBe(3)
    expect(withoutTwoZeros(1, 1)).toBe(2)
    expect(withoutTwoZeros(1, 3)).toBe(4)
    expect(withoutTwoZeros(2, 4)).toBe(10)
  })
})
