import React, { useState } from "react";
import { AddPackingItem } from "packlist-components";

import { addItem, clearList } from "../model";

const AddItems = () => {
  const [value, setValue] = useState('');

  const add = () => {
    addItem(value);
    setValue('');
  }

  return (
    <AddPackingItem
      value={value}
      setNewItemText={e => setValue(e.target.value)}
      addItem={add}
      clear={clearList}
    />
  );
};

export default AddItems;
