/**
 * Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c',
 * реализуйте ее так, что бы она вернула строку '1*b*1c'
 */

function arrToStr(...args: Array<string>): string {
  return [].slice.call(args, 1).join(args[0])
}

describe('arrToStr module test: ', () => {
  test('arrToStr function test: ', () => {
    expect(arrToStr('*', '1', 'b', '1c', 'd', 'e')).toBe('1*b*1c*d*e')
  })
})
