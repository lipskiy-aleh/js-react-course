import React, { createRef } from 'react'

export class AddTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputVal: ''
    }

    this.inputRef = createRef()
  }

  // componentDidMount() {
  //   if(this.props.setDefaultFocus) {
  //     this.inputRef.current.focus()
  //   }
  // }

  setFocus = () => {
    this.inputRef.current.focus()
  }

  onInputChange = (e) => {
    const inputVal = e.target.value
    // this.setState({ inputVal })
  }

  onAddClick = () => {
    const value = this.inputRef.current.value
    this.inputRef.current.value = ''
    this.props.onAddTodo(value)

    this.setState({ inputVal: '' })
  }

  render() {
    return (
      <div className="addTodo">
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.onAddClick}>Add Todo</button>
      </div>
    )
  }
}
