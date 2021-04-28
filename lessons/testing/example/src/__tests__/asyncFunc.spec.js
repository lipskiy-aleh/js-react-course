const asyncFunc = require('../async')

describe('asyncFunc', () => {
  it('should resolve with test', async () => {
    const data = await asyncFunc()
    expect(data).toBe('Test')
  })
})