import React from 'react'
import './style.css'
import { withCreationTime } from '../../hocs/withCreationTime'

class AddTodoCmp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }

    this.inputref = React.createRef()
  }

  inputHandler = (e) => {
    const value = e.target.value
    this.setState({ inputValue: value })
  }

  onAddClick = () => {
    const { inputValue } = this.state
    const { onAdd } = this.props

    onAdd(inputValue)
    this.setState({ inputValue: '' })
  }

  render() {
    const { inputValue } = this.state

    return (
      <div className="add_todo">
        <input type="text" value={inputValue} onChange={this.inputHandler}/>
        <button onClick={this.onAddClick} disabled={!inputValue}>ADD</button>
      </div>
    )
  }
}

export const AddTodo = withCreationTime(AddTodoCmp, {})