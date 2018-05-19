import React from 'react';
import { SimpleList } from 'packlist-components';

function ListItems(props) {
  return <SimpleList value={props.allItems} />;
}

export default ListItems;
