/************************************************
 * This example is one of many examples
 *         -= The React State Museum =-
 * View other state management options and read
 * more in the blog post and the master repo:
 *
 * https://github.com/GantMan/ReactStateMuseum
 ************************************************/
import React from 'react'
import { render } from 'react-dom'
import ListItems from './Components/ListItems'
import AddItem from './Components/AddItem'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}

function App() {
  return (
    <div style={styles}>
      <h2>Welcome to Venti</h2>
      <AddItem />
      <ListItems />
    </div>
  )
}

render(<App />, document.getElementById('root'))
