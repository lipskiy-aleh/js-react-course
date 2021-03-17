import React from 'react'

function Test(props) {
  return (
    <div className="App">
      Hello world, {props.obj && props.obj.name}
    </div>
  )
}

class TestClass extends React.Component {
  render() {
    return (
      <div className="App">
        Hello world class cmp, {this.props.name}
      </div>
    )
  }
}

function App(props) {
  let obj = { name: 'oleg' }
  return (
    <div className="App">
      <Test name="Dan" bool={true} num={10} obj={ obj } onClickFunc={() => obj = {name: 123}}/>
      <Test name="Vasya"/>
      <Test name="Maksim"/>

      <TestClass name="Maksim2"/>
      <TestClass name="Maksim3"/>
    </div>
  );
}

export default App;
