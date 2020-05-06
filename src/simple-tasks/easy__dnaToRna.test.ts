/**
 *
 * https://ru.hexlet.io/challenges/programming_basics_rna
 *
 * ДНК и РНК это последовательности нуклеотидов.
 * Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
 * Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).
 * Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:
 * G -> C
 * C -> G
 * T -> A
 * A -> U
 *
 * Реализуйте и экспортируйте функцию по умолчанию,
 * которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК
 * (совершает транскрипцию РНК).
 *
 * Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка),
 * то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый"
 * нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.
 *
 * dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
 * dnaToRna('CCGTA'); // 'GGCAU'
 * dnaToRna(''); // ''
 * dnaToRna('ACNTG'); // null
 *
 */

/**
 *
 * @throws Error if nucleoid if unknows or empty string
 */
function dnaNucleoidToRnaNucleoid(nucleoid: string): string {
  switch (nucleoid) {
    case 'G':
      return 'C'
    case 'C':
      return 'G'
    case 'T':
      return 'A'
    case 'A':
      return 'U'
    case '':
      throw ''
    default:
      throw null
  }
}

function dnaToRna(dna: string): string | null {
  try {
    return dna.split('').map(dnaNucleoidToRnaNucleoid).join('')
  } catch (e) {
    return e
  }
}

describe('dnaToRna test: ', () => {
  test('Test dnaToRna with unknown nucleoid: ', () => {
    expect(dnaToRna('ACNTG')).toBeNull()
  })

  test('Test dnaToRna with correct nucleoids: ', () => {
    expect(dnaToRna('ACGTGGTCTTAA')).toBe('UGCACCAGAAUU')
  })

  test('Test dnaToRna with empty nucleoids: ', () => {
    expect(dnaToRna('')).toBe('')
  })
})
