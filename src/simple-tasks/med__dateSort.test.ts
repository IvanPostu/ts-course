/**
 * Есть массив в котором лежат объекты с датами, отсортировать по датам.
 */
type CustomDate = {
  date: string
  time?: number
}

const arr1: Array<CustomDate> = [
  { date: '10.01.2017' },
  { date: '05.11.2016' },
  { date: '21.12.2002' },
]

function dateSort(arr: Array<CustomDate>) {
  arr.forEach((d) => {
    const [day, month, year] = d.date.split('.')
    d.time = new Date(+year, +month, +day).getTime()
  })

  arr.sort((a, b) => (a.time as number) - (b.time as number))

  return arr.map((a) => ({
    date: a.date,
  }))
}

describe('Date sort module test: ', () => {
  test('dateSort function test: ', () => {
    expect(dateSort(arr1)).toEqual([
      { date: '21.12.2002' },
      { date: '05.11.2016' },
      { date: '10.01.2017' },
    ])
  })
})
