

const person = new Object({
  name: 'Maxim',
  age: 25,
  greet: function(){
    console.log('Greet')
  }
})

const vasya = Object.create(person)

