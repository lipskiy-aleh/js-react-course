import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time: new Date(),
    }

    this.timerId = null
  }

  componentDidMount() {
    this.initTimer()
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  initTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState({
      time: new Date()
    });
  }

  render() {
    // if(!this.props.clockVisible) {
    //   return null
    // }


    return (
      <div>
        {/* <h1>{this.props.title}! ({this.state.startTime.toLocaleTimeString()})</h1> */}
        <h2>It is {this.state.time.toLocaleTimeString()}.</h2>

        {/* <div style={{ display: 'flex' }}>
          <button onClick={this.onStartClick}>Start</button>
          <button onClick={this.onStopClick}>Stop</button>
        </div> */}
      </div>
    )
  }
}
