/**
 *
 *
 * Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.
 * Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.
 * Разница между квадратом суммы и суммой квадратов первых
 * десяти натуральных чисел: 3025 − 385 = 2640.
 * Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает
 * разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
 *
 */

function sumSquareDiff(numbers: Array<number>): number {
  const squareOfSum: number = numbers.reduce((acc, el) => acc + el, 0) ** 2
  const sumOfSquares: number = numbers.reduce((acc, el) => acc + el ** 2)

  return squareOfSum - sumOfSquares
}

describe('Test this module: ', () => {
  test('test sumSquareDiff function: ', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(sumSquareDiff(arr)).toBe(2640)
  })
})
