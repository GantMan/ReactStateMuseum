import React, { useContext } from "react";
import { SimpleList } from "packlist-components";
import AppContext from "../context/AppContext";

const ItemsList = () => {
  const { items } = useContext(AppContext);

  return <SimpleList value={items} />;
};

export default ItemsList;
