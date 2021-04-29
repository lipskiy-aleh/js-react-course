const operation = require('../Operations')

describe('Operations module', () => {
  it('should raise error if no operator arg pass', () => {
    function raiseErrorFunc() {
      return operation()
    }

    expect(raiseErrorFunc).toThrow()
  })

  it('should send a,b args to operator function', () => {
    const operator = jest.fn()
    const a = 10
    const b = 100

    operation(operator, a, b)

    expect(operator).toHaveBeenCalled()
    expect(operator).toHaveBeenCalledTimes(1)
    expect(operator).toHaveBeenCalledWith(a, b)
  })
})