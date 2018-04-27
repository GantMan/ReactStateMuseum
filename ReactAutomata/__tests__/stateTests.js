import { testStatechart } from 'react-automata'
import App from '../App'
import statechart from '../Statecharts/index'

test('all state snapshots', () => {
  testStatechart({ statechart }, App)
})
