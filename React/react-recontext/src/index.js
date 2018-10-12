import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./recontext/store";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>react-recontext Todo Example</h1>
      <div className="App-intro">
        <TodoList />
        <AddTodo />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  rootElement
);
