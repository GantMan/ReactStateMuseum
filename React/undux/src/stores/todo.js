import { createConnectedStore } from 'undux'

const store = createConnectedStore({ editing: {}, todos: ['Say Hi', 'Wave Goodbye'] })

export default store
