describe('JS generators test:', () => {
  test('Simple generator test: ', () => {
    function* strGenerator() {
      yield 'h'
      yield 'e'
      yield 'l'
      yield 'l'
      yield 'o'
    }

    const str = strGenerator()

    expect(str.next().value).toBe('h')
    expect(str.next().value).toBe('e')
    expect(str.next().value).toBe('l')
    expect(str.next().value).toBe('l')
    expect(str.next().value).toBe('o')
    expect(str.next().done).toBe(true)
  })

  test('Fake generator test: ', () => {
    const iterator = (loop) => ({
      [Symbol.iterator](n = loop) {
        let i = 0
        return {
          next() {
            if (i < n) {
              return { value: i++, done: false }
            }
            return { value: undefined, done: true }
          },
        }
      },
    })

    let i = 0
    for (const z of iterator(6)) {
      expect(z).toBe(i++)
    }
  })

  test('Normal generator test: ', () => {
    function* iter(n = 10) {
      for (let i = 0; i < n; i++) {
        yield i
      }
    }

    let i = 0
    for (const z of iter(6)) {
      expect(z).toBe(i++)
    }
  })
})
