/**
 * Напишите функцию diff, которая принимает два угла (integer),
 * каждый от 0 до 360, и возвращает разницу между ними.
 *
 * diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
 * diff(0, 180) === 180;
 * diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
 * diff(120, 280) === 160;
 */

function diff(p1: number, p2: number): number {
  let max = Math.max(p1, p2)
  let min = Math.min(p1, p2)

  max -= min
  min = 0

  const result = 360 - max

  return result > max ? max : result
}

describe('Function must be return the smallest value:', () => {
  test('Test diff function: ', () => {
    expect(diff(0, 45)).toBe(45)
    expect(diff(0, 180)).toBe(180)
    expect(diff(0, 190)).toBe(170)
    expect(diff(120, 280)).toBe(160)
  })
})
