import React from "react";
import { SimpleList } from "packlist-components";
import { useRecoilValue } from "recoil";
import { items } from "../atoms";

const ListItems = () => {
  const itemList = useRecoilValue(items);

  return <SimpleList value={itemList} />;
};

export default ListItems;
