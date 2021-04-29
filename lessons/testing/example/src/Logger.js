class Logger {
  constructor() {
    this._history = []
  }

  log(event, data) {
    this._history.push({ event, data })
  }
}

module.exports = new Logger()