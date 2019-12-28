import React from 'react'
import { AddPackingItem } from 'packlist-components'
import { useVenti } from 'venti'
import { setNewItemText, addItem, clear } from '../services'

export default function AddItem() {
  const state = useVenti()
  const value = state.get('newItemText')
  return (
    <AddPackingItem
      value={value}
      setNewItemText={e => setNewItemText(e.target.value)}
      addItem={addItem}
      clear={clear}
    />
  )
}
