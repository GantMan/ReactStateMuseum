import { useAtom } from "jotai";
import { SimpleList } from "packlist-components";

import { items } from "../store";

const ListItem = () => {
  const [list] = useAtom(items);

  return <SimpleList value={list} />;
};

export default ListItem;
