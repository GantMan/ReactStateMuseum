import React from 'react'
import { AddPackingItem } from 'packlist-components/native'
import { injectState } from 'freactal'
import { withState } from '../State/listWrap'

export const AddItems = ({ state, effects }) => (
  <AddPackingItem
    addItem={effects.addItem}
    setNewItemText={effects.setNewItemName}
    value={state.newItemName}
    clear={effects.clear}
  />
)

export default withState(injectState(AddItems))
