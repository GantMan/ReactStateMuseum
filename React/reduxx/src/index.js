/************************************************
 * This example is one of many examples
 *         -= The React State Museum =-
 * View other state management options and read
 * more in the blog post and the master repo:
 *
 * https://github.com/GantMan/ReactStateMuseum
 ************************************************/
import React, { Component } from "react";
import { render } from "react-dom";
import ListItems from "./Components/listItems";
import AddItems from "./Components/addItem";

const { setupReduxX, getStore, getState, setState } = require("./reduxx.js");

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

export default class App extends Component {
    constructor(props) {
        super(props);
        setupReduxX(this);
    }

    addItem = () => {
        /*
            ReduxX "store" works like a regular
            React component and its state,
            except you can access it in any file
            to access the global state! #swaggy
        */
        const store = getStore();

        store.setState(state => ({
            allItems: [...state.allItems, state.newItemName],
            newItemName: ""
        }));
    };

    setNewItemName = event => {
        setState("newItemName", event.target.value);
    };

    clear = () => {
        setState("allItems", []);
    };

    render() {
        const value = getState("newItemName");
        const allItems = getState("allItems");
        return (
            <div style={styles}>
                <h2>Welcome to ReduxX</h2>
                <AddItems
                    addItem={this.addItem}
                    setNewItemText={this.setNewItemName}
                    value={value}
                    clear={this.clear}
                />
                <ListItems allItems={allItems} />
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));
