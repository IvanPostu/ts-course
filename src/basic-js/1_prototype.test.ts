import { personWithToStringMethod, personWithoutToStringMethod } from './1_prototype'

describe('Прототипы: ', () => {
  test('Должен вернуть стандартный return от метода toString для простого js обьекта', () => {
    expect(personWithoutToStringMethod.toString()).toBe(new Object().toString())
  })

  test('Должен вернуть return от переопределенного метода toString для простого js обьекта', () => {
    expect(personWithoutToStringMethod.toString()).toBe(new Object().toString())
  })
})
