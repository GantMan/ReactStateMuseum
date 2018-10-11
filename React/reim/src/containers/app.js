import React from 'react'
import {connect} from 'react-reim'
import {Provider, Base, Button, Card, Heading, Icon} from 'usthing-ui'

import todo from '../stores/todo'
import ListTodos from '../components/list-todos'

const App = ({todos, addTodo, updateTodo, deleteTodo}) => (
  <Provider>
    <Base
      display="flex"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Card padding={10} minWidth={400}>
        <Heading>Todo List</Heading>
        <ListTodos
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
        <Button onClick={() => addTodo('New Todo')} plain><Icon name="plus"/></Button>
      </Card>
    </Base>
  </Provider>
)

export default connect(
  todo,
  s => s,
  ({set, snapshot}) => ({
    addTodo(todo = '') {
      set(({todos}) => {
        todos.push(todo)
      })
    },
    updateTodo(index, todo) {
      set(({todos}) => {
        todos[index] = todo
      })
    },
    deleteTodo(index) {
      set(({todos}) => {
        todos.splice(index, 1)
      })
    }
  })
)(App)
