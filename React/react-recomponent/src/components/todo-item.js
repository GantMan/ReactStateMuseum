import React from 'react'
import { List, Input, Button, Icon, Base } from 'usthing-ui'

const TodoItem = ({ index, todo, removeTodo, updateTodo, editing, setEditing }) => (
    <List.Item display="flex" alignItems="center">
        <Base flex="1">
            {editing[index] ? <Input value={todo} onChange={e => updateTodo({ todo: e.target.value, index })} /> : todo}
        </Base>
        <Button onClick={() => setEditing(index)} circle plain>
            <Icon name={editing[index] ? 'eye' : 'edit-2'} />
        </Button>
        <Button onClick={() => removeTodo(index)} circle plain>
            <Icon color="red" name="minus" />
        </Button>
    </List.Item>
)

export default TodoItem
