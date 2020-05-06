/**
 *
 * Функция Аккермана — простой пример вычислимой функции,
 * которая не является примитивно рекурсивной.
 *
 * Она обозначается A(m,n), принимает два неотрицательных целых числа в качестве
 * параметров и возвращает натуральное число. Эта функция растёт очень быстро,
 * например, число A(4,4) настолько велико, что количество цифр в порядке этого
 * числа многократно превосходит количество атомов в наблюдаемой части Вселенной.
 *
 * Функция Аккермана определяется рекурсивно для неотрицательных целых
 * чисел m и n следующим образом:
 *
 * ackermann(0, 0); // 1
 * ackermann(2, 1); // 5
 * ackermann(2, 3); // 9
 *
 * https://ru.hexlet.io/challenges/programming_basics_ackermann
 *
 */

function ackermann(m: number, n: number): number {
  if (m === 0) {
    return n + 1
  }

  if (m > 0 && n === 0) {
    return ackermann(m - 1, 1)
  }

  if (m > 0 && n > 0) {
    return ackermann(m - 1, ackermann(m, n - 1))
  }

  return 0
}

describe('AckermannFunc module test: ', () => {
  test('ackermann test: ', () => {
    expect(ackermann(0, 0)).toBe(1)
    expect(ackermann(2, 1)).toBe(5)
    expect(ackermann(2, 3)).toBe(9)
  })
})
