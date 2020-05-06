/**
 * https://ru.hexlet.io/challenges/programming_basics_invert_case
 *
 * Реализуйте и экспортируйте по умолчанию функцию invertCase,
 * которая меняет в строке регистр каждой буквы на противоположный.
 *
 * invertCase('Hello, World!'); // hELLO, wORLD!
 * invertCase('I loVe JS');     // i LOvE js
 */

function invertCaseUsingASCIICode(text: string): string {
  const aCode = 'a'.charCodeAt(0)
  const zCode = 'z'.charCodeAt(0)

  const ACode = 'A'.charCodeAt(0)
  const ZCode = 'Z'.charCodeAt(0)

  const result = text.split('').map((c) => {
    const currentCode = c.charCodeAt(0)
    if (currentCode >= aCode && currentCode <= zCode) {
      return c.toUpperCase()
    }
    if (currentCode >= ACode && currentCode <= ZCode) {
      return c.toLowerCase()
    }
    return c
  })

  return result.join('')
}

function invertCaseUsingRecursion(text: string): string {
  function invertResolver(letters: Array<string>, index = 0): Array<string> {
    if (index === letters.length) {
      return letters
    }

    const aCode = 'a'.charCodeAt(0)
    const zCode = 'z'.charCodeAt(0)

    const ACode = 'A'.charCodeAt(0)
    const ZCode = 'Z'.charCodeAt(0)

    const code = letters[index].charCodeAt(0)

    if (code >= aCode && code <= zCode) {
      letters[index] = letters[index].toUpperCase()
    }
    if (code >= ACode && code <= ZCode) {
      letters[index] = letters[index].toLowerCase()
    }

    return invertResolver(letters, index + 1)
  }

  return invertResolver(text.split(''), 0).join('')
}

function invertCaseSimple(text: string): string {
  return text
    .split('')
    .map((c) => {
      if (c === c.toUpperCase()) {
        return c.toLowerCase()
      } else {
        return c.toUpperCase()
      }
    })
    .join('')
}

describe('invertCase resolve task:', () => {
  type TestedFunction = (text: string) => string

  const invertCaseArmyOfFunctions: Array<TestedFunction> = [
    invertCaseUsingASCIICode,
    invertCaseUsingRecursion,
    invertCaseSimple,
  ]

  test('Test function invertCase:', () => {
    invertCaseArmyOfFunctions.forEach((func) => {
      expect(func('Hello, World!')).toBe('hELLO, wORLD!')
      expect(func('I loVe JS')).toBe('i LOvE js')
      expect(func('mama ama kriminal')).not.toBe('mama ama kriminal')
    })
  })
})
