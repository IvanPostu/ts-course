type AnimalFamily = 'Dog' | 'Cat' | 'Bear' | 'Tiger' | 'Bird'
interface Animal {
  name: string
  family: AnimalFamily
  isPretty: boolean
  weight: number
}

describe('Test the simple high order functions: ', () => {
  let animals: Array<Animal> = []

  beforeAll(() => {
    animals = [
      { family: 'Dog', name: 'Jack', isPretty: false, weight: 12 },
      { family: 'Cat', name: 'Inna', isPretty: false, weight: 7 },
      { family: 'Bear', name: 'Ruslan', isPretty: true, weight: 144 },
      { family: 'Tiger', name: 'Vladimir', isPretty: true, weight: 55 },
    ]
  })

  test('For loop test: ', () => {
    let counter = 0
    for (const animal of animals) {
      expect(animal.name).toBe(animals[counter++].name)
    }

    counter = 0
    animals.forEach((animal) => {
      expect(animal.name).toBe(animals[counter++].name)
    })

    const animalNames: Array<string> = animals.map((a) => a.name)
    expect(animalNames.length).toBe(animals.length)
    expect(animalNames[0]).toBe(animals[0].name)
  })

  test('Filter method test: ', () => {
    const prettyAnimals = animals.filter((a) => a.isPretty)
    expect(prettyAnimals.length).toBe(2)
    for (let i = 0; i < prettyAnimals.length; i++) {
      expect(prettyAnimals[i].isPretty).toBe(true)
    }
  })

  test('Find and findIndex test: ', () => {
    const barry = animals.find((a) => a.family === 'Bear')
    const barryIndex = animals.findIndex((a) => a.family === 'Bear')

    expect(barry?.name).toBe('Ruslan')
    expect(barryIndex).not.toBe(-1)
  })

  test('Reducer method test: ', () => {
    const totalWeight = animals.reduce((acc, animal) => acc + animal.weight, 0)
    expect(totalWeight).toBe(218)
  })
})
