import React from 'react';
import { AddPackingItem } from 'packlist-components/native';
import { usePackingContext } from '../Constate/packingContext';

export default () => {
  const { addItem, clearItems, newItem, setNewItemText } = usePackingContext();

  return (
    <AddPackingItem
      addItem={addItem}
      clear={clearItems}
      setNewItemText={setNewItemText}
      value={newItem}
    />
  );
};
