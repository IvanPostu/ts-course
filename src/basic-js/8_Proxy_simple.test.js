describe('Proxy global class test with simple cases:', () => {
  describe('Simple JS object with proxy:', () => {
    const audiA5 = {
      productionDate: new Date('2000-02-17'),
      company: 'audi',
      numberOfWheels: 4,
      transmission: 'automat',
    }

    test('Getters and setters test: ', () => {
      const audiA5Proxy = new Proxy(audiA5, {
        get(target, prop) {
          return target[prop]
        },
        set(target, prop, value) {
          if (prop in target) {
            target[prop] = value
          } else {
            throw new Error(`No field ${prop} in target.`)
          }
        },
      })

      expect(audiA5Proxy.company).toBe(audiA5.company)
      expect(audiA5Proxy.numberOfWheels).toBe(audiA5.numberOfWheels)
      expect(audiA5Proxy.productionDate).toBe(audiA5.productionDate)
      expect(audiA5Proxy.transmission).toBe(audiA5.transmission)

      audiA5Proxy.company = 'mercedez'
      expect(audiA5Proxy.company).toBe('mercedez')

      let errorMessage = ''
      try {
        audiA5Proxy.undefinedField = 'Hello world...'
      } catch (e) {
        errorMessage = e.message
      } finally {
        expect(errorMessage).toBe(`No field undefinedField in target.`)
      }
    })

    test('Has and delete (not overrided) test: ', () => {
      const audiA5Proxy = new Proxy(audiA5, {})
      expect('company' in audiA5Proxy).toBe(true)
      expect('undefinedField' in audiA5Proxy).toBe(false)
      const deleteResult = delete audiA5Proxy['company']

      expect('company' in audiA5Proxy).toBe(false)
      expect(deleteResult).toBe(true)
    })

    test('Has and delete ( overrided ) test: ', () => {
      const audiA5Proxy = new Proxy(audiA5, {
        has(target, prop) {
          if (prop === 'chupakabra') {
            return true
          }

          return ['productionDate', 'company', 'transmission'].includes(prop)
        },
        deleteProperty(target, prop) {
          console.log('I has been deleted...')
          return delete target[prop]
        },
      })

      expect('company' in audiA5Proxy).toBeTruthy()
      expect('chupakabra' in audiA5Proxy).toBeTruthy()
      expect('undefinedField' in audiA5Proxy).toBe(false)

      let consoleLogCount = 0
      const consoleLogSpy = jest.spyOn(global.console, 'log').mockImplementation(() => {
        consoleLogCount++
      })

      expect(delete audiA5Proxy['productionDate']).toBeTruthy()
      expect(delete audiA5Proxy['numberOfWheels']).toBeTruthy()
      expect(delete audiA5Proxy['company']).toBeTruthy()

      expect(consoleLogCount).toBe(3)
      consoleLogSpy.mockRestore()
    })
  })

  describe('Simple JS function with Prosy: ', () => {
    function log(message) {
      return `Log: ${message}`
    }

    test('Function proxy: ', () => {
      const functionProxy = new Proxy(log, {
        apply(target, thisArg, args) {
          console.log('Calling log')
          return target.apply(thisArg, args)
        },
      })
      let consoleLogCount = 0
      const consoleLogSpy = jest.spyOn(global.console, 'log').mockImplementation(() => {
        consoleLogCount++
      })

      const functionResult = functionProxy('hi')

      expect(functionResult).toBe('Log: hi')
      expect(consoleLogCount).toBe(1)

      consoleLogSpy.mockRestore()
    })
  })

  describe('Simple ES6 class with Proxy: ', () => {
    class Person {
      constructor(name, age) {
        this.name = name
        this.age = age
      }
    }

    test('Class Test: ', () => {
      let consoleLogMessage = ''
      const PersonProxy = new Proxy(Person, {
        construct(target, args) {
          console.log('construct')

          return new Proxy(new target(...args), {
            get(t, prop) {
              console.log('getting prop ' + prop)
              return t[prop]
            },
          })
        },
      })

      const consoleLogSpy = jest.spyOn(global.console, 'log').mockImplementation((msg) => {
        consoleLogMessage = msg
      })

      const lukas = new PersonProxy('Lukas', 33)
      expect(consoleLogMessage).toBe('construct')

      expect(lukas.name).toBe('Lukas')
      expect(consoleLogMessage).toBe('getting prop name')

      consoleLogSpy.mockRestore()
    })
  })
})
