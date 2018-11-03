import React from 'react'
import { List } from 'usthing-ui'

import TodoItem from './todo-item'

const ListTodos = ({ todos, removeTodo, updateTodo, editing, setEditing }) => (
    <List>
        {todos.map((todo, index) => (
            <TodoItem
                key={index}
                index={index}
                todo={todo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                setEditing={setEditing}
                editing={editing}
            />
        ))}
    </List>
)

export default ListTodos
