import { createContext } from "react";

const AppContext = createContext({
  addItem: (items) => {},
  clearItems: () => {},
  items: [],
});

export default AppContext;
