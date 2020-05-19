function doAction(obj) {
  if (!obj) {
    return ''
  }

  return Object.entries(obj)
    .reduce((acc, [k, v]) => {
      v.forEach((z) => (acc[z] = k))
      return acc
    }, [])
    .join('')
}

const helloWorld = {
  ' ': [5],
  d: [10],
  e: [1],
  H: [0],
  l: [2, 3, 9],
  o: [4, 7],
  r: [8],
  w: [6],
}

describe('Resolve this task: ', () => {
  test('test doAction function: ', () => {
    expect(doAction(helloWorld)).toBe('Hello world')
    expect(doAction()).toBe('')
  })
})
