import React from 'react'
import { Slider } from './Slider'
import { Clock } from './Clock'

export class App extends React.Component {
  // state = {
  //   clockVisible: false,
  // }

  // click = (e) => {
  //   this.setState({
  //     clockVisible: !this.state.clockVisible,
  //   })
  // }

  // notify = (data) => {
  //   console.log('Notify', data)
  // }

  render() {
    return (
      <div className="App">
        <Slider
          content={[
            <Clock title="Title" />,
            <Clock title="Title 1" />,
            <Clock title="Title 2" />,
          ]}
          defaultIndex={1}
        />

        {/* <Clock title="Title" notify={this.notify} clockVisible={this.state.clockVisible} />
  
        <button onClick={this.click}>Click me</button> */}
      </div>
    );
  }
}
