/**
 *
 *
 * "Счастливым" называют билет с номером, в котором сумма первой половины цифр
 * равна сумме второй половины цифр. Номера могут быть произвольной длины,
 * с единственным условием, что количество цифр всегда чётно,
 * например: 33 или 2341 и так далее.
 *
 * Билет с номером 385916 — счастливый, так как 3 + 8 + 5 = 9 + 1 + 6.
 * Билет с номером 231002 не является счастливым, так как 2 + 3 + 1 != 0 + 0 + 2.
 *
 */

function isHappyTicket(ticket: string): boolean {
  let left = 0
  let right = 0

  for (let i = 0; i < ticket.length / 2; i++) {
    left += Number(ticket[i])
    right += Number(ticket[ticket.length - 1 - i])
  }

  return left == right
}

describe('isHappyTicket module test: ', () => {
  test('isHappyTicket function test: ', () => {
    expect(isHappyTicket('1234512354')).toBeTruthy()
  })
  test('isHappyTicket function test: ', () => {
    expect(isHappyTicket('1744')).toBeTruthy()
  })
  test('isHappyTicket function test: ', () => {
    expect(isHappyTicket('2299')).toBeFalsy()
  })
  test('isHappyTicket function test: ', () => {
    expect(isHappyTicket('1391')).toBeFalsy()
  })
})
