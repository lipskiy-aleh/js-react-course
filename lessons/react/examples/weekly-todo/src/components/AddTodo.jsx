import React from 'react'

export class AddTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputVal: ''
    }
  }

  onInputChange = (e) => {
    const inputVal = e.target.value
    this.setState({ inputVal })
  }

  onAddClick = () => {
    this.props.onAddTodo(this.state.inputVal)
    this.setState({ inputVal: '' })
  }

  render() {
    return (
      <div className="addTodo">
        <input type="text" value={this.state.inputVal} onChange={this.onInputChange}/>
        <button onClick={this.onAddClick}>Add Todo</button>
      </div>
    )
  }
}