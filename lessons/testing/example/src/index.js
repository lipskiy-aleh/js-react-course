const logger = require('./Logger')

class Stack {
  constructor() {
    this._data = []
    this._history = []
  }

  _log(event, data) {
    logger.log(event, data)
    // this._history.push({ event, data })
  }

  push(data) {
    this._log('push', data)
    this._data.push(data)
  }

  pop() {
    this._log('pop')
    return this._data.pop()
  }
}

module.exports = Stack