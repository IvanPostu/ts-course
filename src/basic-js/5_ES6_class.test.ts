describe('ES6 class test', () => {
  interface PeopleConstructorType {
    firstName: string
    lastName: string
  }

  class People {
    private readonly _firstName: string
    private readonly _lastName: string

    public static className = 'People'

    constructor(options: PeopleConstructorType) {
      this._firstName = options.firstName
      this._lastName = options.lastName
    }

    public sayHello(): void {
      console.log(`Hello, my name is ${this.fullName}`)
    }

    get fullName() {
      return this._firstName + ' ' + this._lastName
    }
  }

  interface StudentConstructorType extends PeopleConstructorType {
    university: string
    bursary: number
  }

  class Student extends People {
    private readonly _university: string
    private _bursary: number

    public static className = 'People'

    constructor(arg: StudentConstructorType) {
      super({ ...arg })
      this._university = arg.university
      this._bursary = arg.bursary
    }

    public doSomethingUseful(action: string): void {
      console.log(action)
    }

    get university() {
      return this._university
    }

    get bursary() {
      return this._bursary
    }

    set bursary(bursary: number) {
      this._bursary = bursary
    }
  }

  test('People instance sayHallo method', () => {
    let logMessage = ''
    const consoleSpy = jest.spyOn(global.console, 'log')
    consoleSpy.mockImplementation((logMsg) => {
      logMessage = logMsg
    })
    const george = new People({ firstName: 'George', lastName: 'Tom' })

    george.sayHello()

    expect(logMessage).toBe(`Hello, my name is ${george.fullName}`)
  })

  test('People class static field test: ', () => {
    expect(People.className).toBe('People')
  })

  describe('Student test: ', () => {
    let martin: Student

    beforeEach(() => {
      martin = new Student({
        firstName: 'Martin',
        lastName: 'John',
        bursary: 900,
        university: 'NTU',
      })
    })

    test('Getters, setters: ', () => {
      expect(martin.bursary).toBe(900)
      martin.bursary = 1100
      expect(martin.bursary).toBe(1100)

      expect(martin.university).toBe('NTU')

      expect(Student.className).toBe('People')
    })

    test('Method doSomethindUseful test', () => {
      let msg = ''
      const consoleSpy = jest.spyOn(global.console, 'log')
      consoleSpy.mockImplementation((logMsg) => {
        msg = logMsg
      })

      martin.doSomethingUseful('Learn Elm')

      expect(msg).toBe('Learn Elm')
    })
  })
})
