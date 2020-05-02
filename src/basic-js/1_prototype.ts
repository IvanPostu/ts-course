/**
 * Прототипы - определенный объект который присутствует внутри других объектов,
 *  вызывется по цепочке с верху вниз, тоесть если находим поля или функции на верхнем уровне,
 *  обращаемся к ним, если не находим идем вниз по прототипу и ищем либо поля либо функции.
 */

export const personWithoutToStringMethod = new Object({
  name: 'Maxim',
  age: 25,
  greet: function (): void {
    console.log('Greet')
  },
})

export const personWithToStringMethod = {
  ...personWithoutToStringMethod,
  toString: function (): string {
    return 'Overrided to string method.'
  },
}

// const vasya = Object.create(person)

console.log(personWithoutToStringMethod.toString())
console.log(personWithToStringMethod.toString())
