import React from "react";
import { SimpleList } from "packlist-components";
import { useStore } from "effector-react";

import { $list, $isLoading } from "../model";

const ListItems = () => {
  const list = useStore($list);
  const isLoading = useStore($isLoading)

  if (isLoading) return <div>Loading...</div>;

  return <SimpleList value={list} />;
};

export default ListItems;
