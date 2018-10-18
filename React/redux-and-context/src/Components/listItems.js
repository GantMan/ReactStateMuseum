import React from 'react';
import { SimpleList } from "packlist-components";
import ContainerContext from '../Context/ContainerContext'

const ListItems = () => (
  <ContainerContext.Consumer>
    {({ myItems }) => (
      <SimpleList value={myItems} />
    )}
  </ContainerContext.Consumer>
)

export default ListItems;