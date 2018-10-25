import React from 'react'
import { ReComponent, Update } from 'react-recomponent'

const { Provider, Consumer } = React.createContext()

export class TodoContainer extends React.PureComponent {
    render() {
        return <Consumer>{props => this.props.children(props)}</Consumer>
    }
}

export class TodoProvider extends ReComponent {
    constructor() {
        super()
        this.handleAddTodo = this.createSender('ADD_TODO')
        this.handleRemoveTodo = this.createSender('REMOVE_TODO')
        this.handleUpdateTodo = this.createSender('UPDATE_TODO')
        this.handleSetEditing = this.createSender('SET_EDITING')
        this.state = { todos: ['Say Hi', 'Wave Goodbye'], editing: {} }
    }

    static reducer(action, state) {
        switch (action.type) {
            case 'ADD_TODO':
                return Update({ todos: state.todos.concat(action.payload) })
            case 'REMOVE_TODO':
                return Update({ todos: state.todos.filter((_, idx) => idx !== action.payload) })
            case 'UPDATE_TODO':
                return Update({
                    todos: state.todos.map((todo, idx) => (action.payload.index === idx ? action.payload.todo : todo))
                })
            case 'SET_EDITING':
                return Update({
                    editing: {
                        ...state.editing,
                        [action.payload]: !state.editing[action.payload]
                    }
                })
        }
    }

    render() {
        return (
            <Provider
                value={{
                    ...this.state,
                    handleAddTodo: this.handleAddTodo,
                    handleRemoveTodo: this.handleRemoveTodo,
                    handleUpdateTodo: this.handleUpdateTodo,
                    handleSetEditing: this.handleSetEditing
                }}>
                {this.props.children}
            </Provider>
        )
    }
}
