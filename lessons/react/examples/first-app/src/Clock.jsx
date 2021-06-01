import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time: new Date(),
      startTime: new Date(),
      hideTime: false,
    }

    this.timerId = null
  }

  static defaultProps = {
    title: 'My default title',
    notify: () => {}
  }

  componentDidMount() {
    this.initTimer()
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.timerId)
  }

  initTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState({
      time: new Date()
    }, () => {
      this.props.notify(this.state.time)
    });
  }

  onStartClick = () => {
    this.setState({
      time: new Date(),
      startTime: new Date(),
      hideTime: false,
    }, () => {
      this.initTimer()
    })
  }

  onStopClick = () => {
    clearInterval(this.timerId)
    this.timerId = null

    this.setState({
      hideTime: true
    })
  }

  render() {
    // if(!this.props.clockVisible) {
    //   return null
    // }


    return (
      <div>
        <h1>{this.props.title}! ({this.state.startTime.toLocaleTimeString()})</h1>
        {!this.state.hideTime && <h2>It is {this.state.time.toLocaleTimeString()}.</h2>}

        <div style={{ display: 'flex' }}>
          <button onClick={this.onStartClick}>Start</button>
          <button onClick={this.onStopClick}>Stop</button>
        </div>
      </div>
    )
  }
}
