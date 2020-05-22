import { atom, useRecoilState } from "recoil";

const items = atom({
  key: "items",
  default: ["nachos", "burritos", "hot dog"]
});

// clear
const useResetItem = () => {
  const [item, setItem] = useRecoilState(items);
  return () => {
    setItem([]);
  };
};

const userInput = atom({
  key: "userInput",
  default: ""
});

export { items, useResetItem, userInput };
