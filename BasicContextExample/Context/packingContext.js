import React from 'react'

export const PackingDefaults = {
  allItems: ['nacho', 'burrito', 'hotdog'],
  newItemName: ''
}

export const PackingContext = React.createContext({
  // Defaults of the context (difficult to use/see)
  // Usually replaced right away on render event setting value
  ...PackingDefaults
})
