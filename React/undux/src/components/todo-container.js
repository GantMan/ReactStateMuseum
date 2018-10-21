import React from 'react'
import Store from '../stores/todo'

class TodoContainer extends React.PureComponent {
    addTodo = todo => {
        const { store } = this.props

        const todos = store.get('todos')

        store.set('todos')(todos.concat(todo))
    }

    removeTodo = indexToRemove => {
        const { store } = this.props
        const todos = store.get('todos')
        return store.set('todos')(todos.filter((_, idx) => idx !== indexToRemove))
    }

    updateTodo = (todoToUpdate, indexToUpdate) => {
        const { store } = this.props

        const todos = store.get('todos')

        store.set('todos')(todos.map((todo, idx) => (indexToUpdate !== idx ? todo : todoToUpdate)))
    }

    setEditing = index => {
        const { store } = this.props

        const editing = store.get('editing')
        const updated = {
            ...editing,
            [index]: !editing[index]
        }

        store.set('editing')(updated)
    }

    render() {
        const { store } = this.props

        return this.props.children({
            todos: store.get('todos'),
            editing: store.get('editing'),
            addTodo: this.addTodo,
            updateTodo: this.updateTodo,
            removeTodo: this.removeTodo,
            setEditing: this.setEditing
        })
    }
}

export default Store.withStore(TodoContainer)
