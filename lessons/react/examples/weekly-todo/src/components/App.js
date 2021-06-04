import moment from 'moment'
import React from 'react'
import { WeeklyTodo } from './WeeklyTodo'

const startDate = moment('2021-05-31', 'YYYY-MM-DD').format('DD-MM-YYYY')

class App extends React.Component {
  state = {
    todos: []
  }

  onAddTodo = (date, text) => {
    const newTodo = {
      date,
      text,
      status: 'new',
    }

    const newTodos = this.state.todos.map((todo) => ({...todo}))
    newTodos.push(newTodo)

    this.setState({
      todos: newTodos
    })
  }


  render() {
    const { todos } = this.state

    return (
      <div className="">
        <WeeklyTodo todos={todos} startDate={startDate} onAddTodo={this.onAddTodo}/>
      </div>
    )
  }
}

export default App
