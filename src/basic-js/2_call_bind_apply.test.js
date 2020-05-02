/**
 * This - в не стрелочной функции указывает на контекст обьекта слева
 *
 * Пример:
 *  jorik.sayHello() this из функции указывает на обьект jorik
 *  audi.sayHello() this из функции указывает на обьект audi
 *  hello() указывает на контекст глоб. объекта, для браузера window, для nodejs
 *    глобальный скоуп
 */

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function hello() {
  return {
    message: 'Hello',
    context: this,
  }
}

describe('Контекст: ', () => {
  test('Функция bind возвращает новую функцию.', () => {
    function q() {
      console.log(1)
    }

    expect(q === q.bind({})).toBe(false)
  })

  test('Контекст функции hello в объекте audi и внутри объекта jorik разный.', () => {
    const jorik = {
      name: 'Jorik',
      age: 38,
      sayHello: hello,
    }

    const audi = {
      name: 'audi',
      wheels: 4,
      sayHello: hello,
    }
    const jorikContext = jorik.sayHello().context
    const audiContext = audi.sayHello().context

    expect(JSON.stringify(jorikContext)).not.toEqual(JSON.stringify(audiContext))
  })

  test(`Контекст функции sayHello: hello, в объекте jorik равен 
  sayHelloJorik: hello.bind(jorik) внутри объекта rick.`, () => {
    const jorik = {
      name: 'Jorik',
      age: 38,
      sayHello: hello,
    }
    const rick = {
      name: 'Rick',
      heads: 1,
      sayHello: hello,
      sayHelloJorik: hello.bind(jorik),
    }
    const jorikContext = jorik.sayHello().context
    const jorikContextInRickObject = rick.sayHelloJorik().context

    expect(JSON.stringify(jorikContext)).toEqual(JSON.stringify(jorikContextInRickObject))
  })

  test('Использование функции с контекстом и переменными для разных объектов.', () => {
    const musya = {
      name: 'Musya',
      age: 22,
      logInfo: function (job, phone) {
        const result = `${this.name} info:
        Name is ${this.name}
        Age is ${this.age}
        Job is ${job}
        Phone is ${phone}
        `
        return result
      },
    }

    const georgel = {
      name: 'Georgel',
      age: 33,
    }

    const musyaLog = musya.logInfo('IT', 'iphone')
    const fnGeorgelLogInfo = musya.logInfo.bind(georgel, 'dvornik', 'samsung')
    const georgelLog = fnGeorgelLogInfo()

    expect(musyaLog.includes('IT') && musyaLog.includes('iphone')).toBeTruthy()
    expect(georgelLog.includes('dvornik') && georgelLog.includes('samsung')).toBeTruthy()
  })

  test('Функция call и apply пример.', () => {
    const musya = {
      name: 'Musya',
      age: 22,
      logInfo: function (job, phone) {
        const result = `${this.name} info:
        Name is ${this.name}
        Age is ${this.age}
        Job is ${job}
        Phone is ${phone}
        `
        return result
      },
    }

    const georgel = {
      name: 'Georgel',
      age: 33,
    }

    const execBindResult = musya.logInfo.bind(georgel, 'dvornik', 'samsung')()
    const justCall = musya.logInfo.call(georgel, 'dvornik', 'samsung')
    const justApply = musya.logInfo.apply(georgel, ['dvornik', 'samsung'])
    expect(execBindResult === justCall).toBe(true)
    expect(execBindResult === justApply).toBe(true)
  })
})
