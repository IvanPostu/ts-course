/**
 * Функция принимает два параметра (begin и end),
 * определяющих начало и конец диапазона (включительно).
 * Для простоты считаем, что эти параметры являются целыми числами больше нуля.
 * Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.
 *
 * Если число делится без остатка на 3, то вместо него выводится слово Fizz
 * Если число делится без остатка на 5, то вместо него выводится слово Buzz
 * Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
 * В остальных случаях выводится само число
 *
 * fizzBuzz(11, 20);
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 * 16
 * 17
 * Fizz
 * 19
 * Buzz
 */

function fizzBuzz(begin: number, end: number): void {
  if (begin > end) {
    return
  }

  let result = String(begin)

  if (begin % 3 === 0) {
    result = 'Fizz'
  }
  if (begin % 5 === 0) {
    result = 'Buzz'
  }
  if (begin % (5 * 3) === 0) {
    result = 'FizzBuzz'
  }

  console.log(result)
  fizzBuzz(begin + 1, end)
}

describe('fizzBuzz module test: ', () => {
  test('fizBuzz function test: ', () => {
    const argss = []
    const result: Array<string> = [
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
      '16',
      '17',
      'Fizz',
      '19',
      'Buzz',
    ]
    const loggedArray: Array<string> = []

    const consoleLogSpy = jest.spyOn(global.console, 'log')
    consoleLogSpy.mockImplementation((msg) => {
      loggedArray.push(msg)
    })

    fizzBuzz(11, 20)
    consoleLogSpy.mockRestore()
    // console.log(loggedArray)
    expect(result).toEqual(loggedArray)
  })
})
