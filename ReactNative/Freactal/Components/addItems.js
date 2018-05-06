import React from 'react'
import { AddPackingItem } from 'packlist-components/native'
import { injectState } from 'freactal'

export const AddItems = ({ state, effects }) => (
  <AddPackingItem
    addItem={effects.addItem}
    setNewItemText={effects.setNewItemName}
    value={state.newItemName}
    clear={effects.clear}
  />
)

export default injectState(AddItems)
