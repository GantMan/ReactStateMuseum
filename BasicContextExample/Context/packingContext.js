import React from 'react'

export const PackingDefaults = {
  allItems: ['nacho', 'burrito', 'hotdog'],
  newItemName: ''
}

export const PackingContext = React.createContext({
  // Default value of the context - Only if component is outside of provider
  // Usually replaced right away on setting value at top level for provider
  ...PackingDefaults
})
