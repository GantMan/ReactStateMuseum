import React from 'react';
import {SimpleList} from 'packlist-components/native';

export default function ListItems({allItems}) {
  return <SimpleList value={allItems} />;
}
