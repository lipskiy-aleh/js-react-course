import React from 'react'

// const stopwatch = new Stopwatch()
// stopwatch.render()

export class Stopwatch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      second: 58,
      minute: 59,
      hour: 0,
    }
    this.timerId = null;
  }

  onResetClick = () => {
    this.onStopClick()
    this.setState({
      second: 0,
      minute: 0,
      hour: 0,
    })
  }

  tick = () => {
    const { second, minute, hour } = this.state

    let newSecond = second + 1
    let newMinute = minute
    let newHour = hour

    if(newSecond > 59) {
      newSecond = 0
      newMinute += 1
    }

    if(newMinute > 59) {
      newMinute = 0
      newHour += 1
    }

    this.setState({
      second: newSecond,
      minute: newMinute,
      hour: newHour,
    })
  }

  onStartClick = () => {
    this.timerId = setInterval(this.tick,1000)
  }

  onStopClick = () => {
    clearInterval(this.timerId)
  }

  render() {
    const { second, minute, hour } = this.state

    return (
      <div>
        <div>
          {`${hour}: ${minute}: ${second}`}
        </div>
        <button onClick={this.onStopClick}>Stop</button>
        <button onClick={this.onStartClick}>Start</button>
        <button onClick={this.onResetClick}>Reset</button>
      </div>
    )
  }
}