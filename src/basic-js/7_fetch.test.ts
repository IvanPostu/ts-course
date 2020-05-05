async function postsApi(url: string) {
  const response = await fetch(url)
  const data = response.json()
  return data
}

describe('Fetch test: ', () => {
  afterAll(() => {
    global.fetch.mockClear()
  })

  test('Simple fetch test with mock: ', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({
            json: () =>
              new Promise((resolve) =>
                resolve({
                  userId: 1,
                  id: 1,
                  title: 'delectus aut autem',
                  completed: false,
                }),
              ),
          })
        }),
    )

    const data = await postsApi('http://jsonplaceholder.typicode.com/todos?_limit=5')
    expect(global.fetch).toHaveBeenCalledWith('http://jsonplaceholder.typicode.com/todos?_limit=5')
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    })
  })
})
