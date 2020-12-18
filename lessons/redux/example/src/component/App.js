import React from 'react'
import { connect } from 'react-redux'
import { Button, WrappedBtn } from './Button'
import { onIncrement, onDecrement } from '../actions'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      num: 1
    }
  }

  onNumChange = (e) => {
    const num = Number(e.target.value)
    this.setState({
      num
    })
  }

  onIncrementClick = () => {
    const { num } = this.state
    this.props.incrementHandler(num)
  }

  render() {
    const { num } = this.state
    const { number, count, decrementHandler } = this.props

    return (
      <div className="App">
        <div style={{ display: 'flex' }}>
          <input type="number" value={num} onChange={this.onNumChange}/>
  
          <WrappedBtn text="increment (+)" onClick={this.onIncrementClick} primary/>
          <h2 style={{ margin: '0 50px' }} > {number} </h2>
          <Button text="decrement (-)" onClick={decrementHandler} />
        </div>
  
        <div>Clicked: {count}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  number: state.number,
  count: state.counter,
})

const mapDispatchToProp = (dispatch) => ({
  incrementHandler: (num) => dispatch(onIncrement(num)),
  decrementHandler: () => dispatch(onDecrement()),
})

export default connect(mapStateToProps, mapDispatchToProp)(App);
