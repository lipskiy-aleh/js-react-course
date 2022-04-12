const { sum, toArray, process } = require('./sum')

describe('utils', () => {
  describe('process', () => {
    it('should be 10', () => {
      const res = process((a) => a, 10)

      expect(res).toBe(10)
    })

    it('should trigger func', () => {
      const arg = 100
      const mockFunc = jest.fn().mockReturnValue(arg)
      const res = process(mockFunc, arg)

      // expect(mockFunc).toHaveBeenCalled()
      // expect(mockFunc).toHaveBeenCalledTimes(1)
      // expect(mockFunc).toHaveBeenCalledWith(arg)

      expect(res).toBe(100)
    })

    it('should return 0 when arg not define', () => {
      const mockFunc = jest.fn()
      const res = process(mockFunc)

      expect(mockFunc).not.toHaveBeenCalled()
      expect(res).toBe(0)
    })
  })

  describe('sum function', () => {
    it('sum 1 and 2 should be 3', () => {
      const res = sum(1, 2)

      expect(res).toBe(3)

      // expect(res).not.toBeNull()
      // expect(res).toBe(null)
    })
  })

  describe('toArray', () => {
    it('should return array for args', () => {
      const res = toArray(1, 2)

      expect(res).toEqual([1, 2])
    })
  })
})