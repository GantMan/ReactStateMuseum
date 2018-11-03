import React from 'react';
import { SimpleList } from 'packlist-components/native'
import { store } from "../App";

const ListItems = () => (
  <SimpleList value={store.state.allItems} />
);

export default ListItems;
