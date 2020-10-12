import React from 'react';
import { SimpleList } from 'packlist-components/native';
import { usePackingContext } from '../Constate/packingContext';

export default function ListItems() {
  const { allItems } = usePackingContext();

  return <SimpleList value={allItems} />;
}
