const Stack = require('../stack')

const logger = {
  log: jest.fn()
}

describe('Stack', () => {
  it('should be empty on init', () => {
    const ds = new Stack(logger)

    expect(ds.getAsArray()).toHaveLength(0)
    expect(ds.getAsArray().length).toBe(0)
  })

  describe('isEmpty method', () => {
    it('should return true when stack is empty', () => {
      const ds = new Stack(logger)

      expect(ds.isEmpty()).toBe(true)
    })

    it('should return false when stack is not empty', () => {
      // Arrange
      const ds = new Stack(logger)

      // Act
      ds.push(1)
      ds.push(2)

      // Assert
      expect(ds.isEmpty()).toBe(false)
    })
  })

  it('should push data correctly', () => {
    const ds = new Stack(logger)
    const data1 = 1
    const data2 = 2
    const result = [data1, data2]

    const return1 = ds.push(data1)
    const return2 = ds.push(data2)

    expect(return1).toEqual(data1)
    expect(return2).toEqual(data2)
    expect(ds.getAsArray()).toEqual(result)
  })

  it('check logger', () => {
    const customLogger = {
      log: jest.fn()
    }
    const ds = new Stack(customLogger)
    const data1 = 1

    ds.push(data1)

    expect(customLogger.log).toHaveBeenCalled()
    expect(customLogger.log).toHaveBeenCalledTimes(1)
    expect(customLogger.log).toHaveBeenCalledWith('Stack/push', data1)
  })
})