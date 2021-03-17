import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }

function Hello(props) {
  // console.log('CALL hello cmp', props)
  return (
    <div>
      <h1>Hello, world! {props.name}</h1>
      {/* <button onClick={props.onBtnNameClick}>Click</button> */}
    </div>
  )
}

class Clock extends React.Component {
  timeId = null

  constructor(props) {
    super(props)

    this.state = {
      name: 'Vasya',
      date: new Date(),
    }

    // this.onBtnNameClick = this.onBtnNameClick.bind(this)
  }
  	
  componentDidMount() {
    this.timeId = setInterval(() => {
      this.tick()
    }, 1000);
  }

  // shouldComponentUpdate(nextProp, nextState) {
  //   console.log('CALL', nextProp, nextState)
  //   console.log('CALL', this.props, this.state)
  //   return false;
  // }

  tick() {
    this.setState({
      date: new Date(),
    })
  }
 
  componentWillUnmount() {
    clearInterval(this.timeId)
  }

  onBtnNameClick = () => {
    this.setState({
      name: 'Dan'
    })
  }

  render() {
    return (
      <div>
        {this.state.name === 'Dan' && <Hello name={this.state.name} />}
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.onBtnNameClick}>Click</button>

      </div>
    )
  }
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
);

// function tick() {
//   // const element = (
//   //   <div>
//   //     <h1>Hello, world!</h1>
//   //     <h2>It is {new Date().toLocaleTimeString()}.</h2>
//   //   </div>
//   // );
 
//   ReactDOM.render(
//     <Clock/>,
//     document.getElementById('root')
//   );
// }
 
// setInterval(tick, 1000);