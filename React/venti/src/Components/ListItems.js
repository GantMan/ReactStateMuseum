import React from 'react'
import { SimpleList } from 'packlist-components'
import { useVenti } from 'venti'

export default function ListItems() {
  const state = useVenti()
  const items = state.get('items')
  return <SimpleList value={items} />
}
