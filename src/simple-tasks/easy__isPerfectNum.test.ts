/**
 * Создайте функцию isPerfect, которая принимает число и возвращает true,
 * если оно совершенное, и false — в ином случае.
 *
 * Совершенное число — положительное целое число,
 * равное сумме его положительных делителей (не считая само число).
 * Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
 */

function isPefrect(n: number): boolean {
  let res = 0

  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      res += i
    }
  }

  return res === n
}

describe('isPerfect number: ', () => {
  test('isPerfect function test: ', () => {
    expect(isPefrect(6)).toBeTruthy()
  })

  test('isPerfect function test: ', () => {
    expect(isPefrect(17)).not.toBeTruthy()
  })
})
