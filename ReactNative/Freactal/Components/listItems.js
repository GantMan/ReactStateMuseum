import React from 'react'
import { SimpleList } from 'packlist-components/native'
import { injectState } from 'freactal'

export const ListItems = ({ state }) => (
  <SimpleList
    value={state.allItems}
  />
)

export default injectState(ListItems)
