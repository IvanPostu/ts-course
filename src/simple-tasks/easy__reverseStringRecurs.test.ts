/**
 * Реализуйте и экспортируйте функцию по умолчанию,
 * которая переворачивает строку задом наперед, используя рекурсию.
 */

function reverseString(str: string): string {
  if (str.length > 1) {
    const left = 0
    const right = str.length - 1

    const newStr =
      str.slice(0, left) + str.slice(left + 1, right) + str.slice(right + 1, str.length)

    return str[right] + reverseString(newStr) + str[left]
  } else {
    return str
  }
}

describe('Reverse string using recursion: ', () => {
  test('Reverse string function: ', () => {
    expect(reverseString('abc')).toBe('cba')
    expect(reverseString('hello')).toBe('olleh')
    expect(reverseString('123AB')).toBe('BA321')
    expect(reverseString('ABCDEF')).toBe('FEDCBA')
    expect(reverseString('ABCDEF')).not.toBe('ABCDEF')
  })
})
