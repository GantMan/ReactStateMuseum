import React, {useState} from 'react';
import {AddPackingItem} from 'packlist-components/native';

export default function AddItems({addItem, clear}) {
  const [newItemName, setNewItemName] = useState('');

  const addNewItem = () => {
    addItem(newItemName);
    setNewItemName('');
  };

  return (
    <AddPackingItem
      addItem={addNewItem}
      setNewItemText={setNewItemName}
      value={newItemName}
      clear={clear}
    />
  );
}
