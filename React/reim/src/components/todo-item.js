import React from 'react'
import {List, Input, Button, Icon, Base} from 'usthing-ui'
import {State} from 'react-reim'

const TodoItem = ({index, todo, updateTodo, deleteTodo}) => (
  <State initial={{editting: false}}>
    {
      ({editting}, {set}) => (
        <List.Item display="flex" alignItems="center">
          <Base flex="1">
          {
            editting ?
              <Input value={todo} onChange={e => updateTodo(index, e.target.value)}/> :
              todo
          }
          </Base>
          <Button onClick={() => set({editting: !editting})} circle plain><Icon name={editting ? 'eye' : 'edit-2'}/></Button>
          <Button onClick={() => deleteTodo(index)} circle plain><Icon color="red" name="minus"/></Button>
        </List.Item>
      )
    }
  </State>
)

export default TodoItem
