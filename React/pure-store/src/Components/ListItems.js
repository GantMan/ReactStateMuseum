import React from 'react';
import { SimpleList } from "packlist-components";
import { store } from "../index";

const ListItems = () => (
  <SimpleList value={store.state.allItems} />
);

export default ListItems;
