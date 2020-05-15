/**
 * isPowerOfThree.js
 *
 * Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree,
 * которая определяет, является ли переданное число натуральной степенью тройки.
 * Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.
 */

function isPowerOfThreeUsingMath(n: number): boolean {
  const pow: number = Math.log(n) / Math.log(3)
  return pow % 1 < 0.00000000001
}

function isPowerOfThreeUsingLoop(n: number): boolean {
  let a = 3
  let pow = 1

  while (a < n) {
    a *= 3
    pow++
  }

  return a === n
}

describe('is power of three module test: ', () => {
  test('isPowerOfThreeUsingMath test: ', () => {
    expect(isPowerOfThreeUsingMath(27)).toBeTruthy()
    expect(isPowerOfThreeUsingMath(81)).toBeTruthy()
    expect(isPowerOfThreeUsingMath(9)).toBeTruthy()

    expect(isPowerOfThreeUsingMath(33)).toBeFalsy()
    expect(isPowerOfThreeUsingMath(313)).toBeFalsy()
    expect(isPowerOfThreeUsingMath(123)).toBeFalsy()
  })

  test('isPowerOfThreeUsingLoop test: ', () => {
    expect(isPowerOfThreeUsingLoop(27)).toBeTruthy()
    expect(isPowerOfThreeUsingLoop(81)).toBeTruthy()
    expect(isPowerOfThreeUsingLoop(9)).toBeTruthy()

    expect(isPowerOfThreeUsingLoop(33)).toBeFalsy()
    expect(isPowerOfThreeUsingLoop(313)).toBeFalsy()
    expect(isPowerOfThreeUsingLoop(123)).toBeFalsy()
  })
})
