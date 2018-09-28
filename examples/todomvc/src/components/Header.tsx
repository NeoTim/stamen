import * as React from 'react'
import TodoTextInput from './TodoTextInput'
import { addTodo } from '../stores/todoStore'

const Header = () => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo={true}
      onSave={text => {
        if (text.length !== 0) {
          addTodo(text)
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
)

export default Header
