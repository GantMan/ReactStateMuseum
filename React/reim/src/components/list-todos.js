import React from 'react'
import {List} from 'usthing-ui'

import TodoItem from './todo-item'

const ListTodos = ({todos, updateTodo, deleteTodo}) => (
  <List>
    {
      todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))
    }
  </List>
)

export default ListTodos
