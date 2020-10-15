import React from 'react'
import {connect} from 'react-redux'
import { addTodoAction, toggleTodoAction } from '../redux/actions/todoActions'
import Todo from './Todo'

class Todos extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newTodo: ''
    }
  }

  onAddClick = () => {
    this.props.onAddTodo(this.state.newTodo)
    this.setState({ newTodo: '' })
  }

  render() {
    return (
      <div>
        {this.props.todos.filter((todo) => this.props.filter === 'all' || !todo.done).map((item) => (
          <Todo
            key={item.id}
            item={item}
            onTodoClick={(id) => this.props.toggleTodo(id, this.props.todos)}
          />))}

        <div style={{display: 'flex', width: '400px', justifyContent: 'space-between', marginBottom: '20px'}}>
          <input
            style={{ width: '300px' }}
            placeholder="New todo"
            value={this.state.newTodo}
            onChange={({target: { value }}) => this.setState({newTodo: value})}
          />
          <button
            onClick={this.onAddClick}
          >Add todo</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.filter
})

const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (text) => dispatch(addTodoAction(text)),
  toggleTodo: (id, todos) => dispatch(toggleTodoAction(id, todos))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)