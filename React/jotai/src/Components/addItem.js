import { AddPackingItem } from "packlist-components";
import { useAtom, useSetAtom } from "jotai";

import { initialValue, items } from "../store";

const AddItem = () => {
  const [item, setItem] = useAtom(initialValue);
  const setItemList = useSetAtom(items);

  const addItem = () => {
    setItemList((prev) => [...prev, item]);
    setItem("");
  };

  const clearlist = () => {
    setItemList([]);
  };

  return (
    <AddPackingItem
      value={item}
      addItem={addItem}
      setNewItemText={(e) => setItem(e.target.value)}
      clear={clearlist}
    />
  );
};

export default AddItem;
