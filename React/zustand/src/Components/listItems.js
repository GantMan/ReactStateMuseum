import React from "react";
import { SimpleList } from "packlist-components";
import { useItemsStore } from "../store";

const ListItems = () => {
  const { items } = useItemsStore();
  return <SimpleList value={items} />;
};

export default ListItems;
