export default {
  addTodo: (state, { newTodoContent }) => ({
    todos: [
      ...state.todos,
      {
        id: state.todos.length + 1,
        content: newTodoContent,
        completed: false
      }
    ]
  }),
  toggleItem: (state, { todoId }) => ({
    todos: state.todos.map(
      todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )
  })
};
