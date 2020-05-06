/**
 *
 * Реализуйте и экспортируйте функцию по умолчанию,
 * которая принимает на вход строку, состоящую только
 * из открывающих и закрывающих круглых скобок,
 * и проверяет является ли эта строка корректной.
 * Пустая строка (отсутствие скобок) считается корректной.
 *
 * areBracketsBalanced('(())');  // true
 * areBracketsBalanced('((())'); // false
 *
 */

function areBracketsBalanced(str: string): boolean {
  const isValid =
    str.split('').reduce((acc, cur) => {
      if (cur === '(') {
        return acc + 1
      }
      if (cur === ')') {
        return acc - 1
      }
      throw new Error('Function argument is not valid!!!')
    }, 0) === 0

  return isValid
}

describe('areBracketsBalanced module test: ', () => {
  test('areBracketsBalanced function test: ', () => {
    expect(areBracketsBalanced('(())')).toBeTruthy()
    expect(areBracketsBalanced('((())')).not.toBeTruthy()

    let err: Error = new Error()
    try {
      expect(areBracketsBalanced('A(())')).toBeTruthy()
    } catch (e) {
      err = e
    } finally {
      expect(err.message).toBe('Function argument is not valid!!!')
    }
  })
})
