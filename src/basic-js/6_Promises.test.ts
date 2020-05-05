describe('Promises tests: ', () => {
  test('Simple promise: ', async () => {
    let errorMessage = ''
    let successMessage = ''

    try {
      /**
       * Variable is assigned
       */
      successMessage = await new Promise((resolve, reject) => {
        resolve('success')
      })

      /**
       * No variable is assigned and
       * goto catch block =(
       */
      const promiseResultError = await new Promise((resolve, reject) => {
        reject('error')
      })
    } catch (e) {
      errorMessage = e
    }

    expect(errorMessage).toBe('error')
    expect(successMessage).toBe('success')
  })

  test('Many promises, all resolve (all method) : ', async () => {
    const p1 = new Promise((resolve) => resolve('p1'))
    const p2 = new Promise((resolve) => resolve('p2'))
    const p3 = new Promise((resolve) => resolve('p3'))

    /**
     * Return ['p1', 'p2', 'p3'] in any sitiation
     */
    const acc = await Promise.all([p1, p2, p3])
    expect(acc).toEqual(['p1', 'p2', 'p3'])
  })

  test('Many promises, with one reject (all method) : ', async () => {
    const p1 = new Promise((resolve) => resolve('p1'))
    const p2 = new Promise((resolve) => resolve('p2'))
    const p3 = new Promise((resolve, reject) => reject('p3Error'))
    let errorMsg = ''
    /**
     * Return error if there is at least one.
     */
    try {
      const acc = await Promise.all([p1, p2, p3])
    } catch (e) {
      errorMsg = e
    } finally {
      expect(errorMsg).toBe('p3Error')
    }
  })

  test('Race promises test: ', async () => {
    const p1 = new Promise((resolve) => resolve('p1'))
    const p2 = new Promise((resolve) => resolve('p2'))
    const p3 = new Promise((resolve, reject) => reject('p3Error'))
    let errorMsg = ''

    /**
     * Return first resolved or rejected promise.
     */
    try {
      /**
       * rejected, goto catch block
       */
      const acc = await Promise.race([p3, p1, p2])
    } catch (e) {
      errorMsg = e
    } finally {
      expect(errorMsg).toBe('p3Error')
    }

    let acc

    try {
      /**
       * resolved
       */
      acc = await Promise.race([p1, p1, p3])
    } catch (e) {
      errorMsg = e
    } finally {
      expect(acc).toBe('p1')
    }
  })
})
