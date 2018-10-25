import React from 'react'
import { TodoProvider, TodoContainer } from '../context/todo'
import { Provider, Base, Button, Card, Heading, Icon } from 'usthing-ui'

import ListTodos from '../components/list-todos'

const App = () => (
    <TodoProvider>
        <Provider>
            <TodoContainer>
                {({ todos, handleAddTodo, handleRemoveTodo, handleUpdateTodo, handleSetEditing, editing }) => (
                    <Base display="flex" minHeight="100vh" alignItems="center" justifyContent="center">
                        <Card padding={10} minWidth={400}>
                            <Heading>Todo List</Heading>
                            <ListTodos
                                todos={todos}
                                removeTodo={handleRemoveTodo}
                                updateTodo={handleUpdateTodo}
                                setEditing={handleSetEditing}
                                editing={editing}
                            />
                            <Button onClick={() => handleAddTodo('New Todo')} plain>
                                <Icon name="plus" />
                            </Button>
                        </Card>
                    </Base>
                )}
            </TodoContainer>
        </Provider>
    </TodoProvider>
)

export default App
