import React from 'react'
import { SimpleList } from 'packlist-components/native'
import { injectState } from 'freactal'
import { withState } from '../State/listWrap'

export const ListItems = ({ state }) => (
  <SimpleList
    value={state.allItems}
  />
)

export default withState(injectState(ListItems))
