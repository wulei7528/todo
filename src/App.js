import React, { Component } from 'react'
import AddTodo from './containers/AddTodo'
import TodoList from './containers/VisibilityTodoList'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    )
  }
}

export default App
