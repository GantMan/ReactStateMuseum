import React from 'react'
import Store from '../stores/todo'
import { Provider, Base, Button, Card, Heading, Icon } from 'usthing-ui'

import ListTodos from '../components/list-todos'
import TodoContainer from '../components/todo-container'

const App = () => (
    <Store.Container>
        <Provider>
            <TodoContainer>
                {({ addTodo, todos, removeTodo, updateTodo, setEditing, editing }) => (
                    <Base display="flex" minHeight="100vh" alignItems="center" justifyContent="center">
                        <Card padding={10} minWidth={400}>
                            <Heading>Todo List</Heading>
                            <ListTodos
                                todos={todos}
                                removeTodo={removeTodo}
                                updateTodo={updateTodo}
                                setEditing={setEditing}
                                editing={editing}
                            />
                            <Button onClick={() => addTodo('New Todo')} plain>
                                <Icon name="plus" />
                            </Button>
                        </Card>
                    </Base>
                )}
            </TodoContainer>
        </Provider>
    </Store.Container>
)

export default App
