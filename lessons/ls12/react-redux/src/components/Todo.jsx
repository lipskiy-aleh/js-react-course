import React from 'react'

class Todo extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.item.done} onChange={() => this.props.onTodoClick(this.props.item.id)} />
        <span>{this.props.item.title}</span>
      </div>
    )
  }
}

export default Todo