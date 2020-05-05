describe('Simple function closures.', () => {
  test('Url constructor using function closure.', () => {
    function urlGenerator(domain) {
      return function (url) {
        return `https://${url}.${domain}`
      }
    }

    const comUrl = urlGenerator('com')
    const ruUrl = urlGenerator('ru')

    expect(comUrl('vk')).toBe('https://vk.com')
    expect(ruUrl('yandex')).toBe('https://yandex.ru')
  })
})
