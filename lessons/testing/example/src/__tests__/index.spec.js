const Stack = require('../index')

jest.mock('../Logger', () => ({
  log: jest.fn
}))

describe('Stack tests', () => {
  let stack

  beforeAll(() => {
    console.log('beforeAll')
  })

  beforeEach(() => {
    stack = new Stack()
  })

  afterEach(() => {
    stack = null
  })

  afterAll(() => {
    console.log('afterAll')
  })

  it('can add value to stack', () => {
    const value = { a: 100 }

    stack.push({ a: 1 })
    stack.push({ a: 2 })

    expect(stack._data.length).toBe(2)

    expect(stack._data[0]).toEqual({ a: 1 })
    expect(stack._data[0]).not.toEqual({ a: 2 })
  })

  it('can get value from stack', () => {
    const valueToCheck = 5

    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(valueToCheck)

    expect(stack._data.length).toBe(4)
    const value = stack.pop()
    expect(value).toBe(valueToCheck)
    expect(stack._data.length).toBe(3)
  })

  it('example mock history', () => {

    jest.spyOn(stack, '_log').mockImplementationOnce((event) => { console.log(event) })

    stack.push(1)
    stack.push(2)

    expect(stack._log).toHaveBeenCalledTimes(2)
  }) 
})