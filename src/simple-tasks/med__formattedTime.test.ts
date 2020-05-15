/**
 *
 * Реализуйте и экспортируйте по умолчанию функцию,
 * которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку,
 *  являющуюся временем в формате чч:мм.
 * Если количество минут содержит больше 24 часов (1 суток),
 * то функция возвращает время прошеднее с полуночи последних суток.
 *
 */

function formattedTime(minuts: number): string {
  const hoursPerDay = 24
  const minutsPerHour = 60

  const hours = Math.floor((minuts / minutsPerHour) % hoursPerDay)
  const hoursStr = hours < 10 ? `0${hours}` : String(hours)

  const calculatedMinuts = minuts % minutsPerHour
  const calculatedMinutsStr =
    calculatedMinuts < 10 ? `0${calculatedMinuts}` : String(calculatedMinuts)

  return hoursStr + ':' + calculatedMinutsStr
}

describe('formatted time module test: ', () => {
  test('formattedTime function test: ', () => {
    expect(formattedTime(5)).toBe('00:05')
    expect(formattedTime(15)).toBe('00:15')
    expect(formattedTime(60)).toBe('01:00')
    expect(formattedTime(67)).toBe('01:07')
    expect(formattedTime(175)).toBe('02:55')
    expect(formattedTime(600)).toBe('10:00')
    expect(formattedTime(754)).toBe('12:34')
    expect(formattedTime(1504)).toBe('01:04')
  })
})
