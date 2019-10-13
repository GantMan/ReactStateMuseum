import React from "react";
import { SimpleList } from "packlist-components";

import { useApp } from "../Overmind/store";

const ListItems = () => {
  const { state } = useApp();

  return <SimpleList value={state.items} />;
};

export default ListItems;
