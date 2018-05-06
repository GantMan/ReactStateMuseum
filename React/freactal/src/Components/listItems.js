import React, { Component } from "react";
import { SimpleList } from "packlist-components";
import { injectState } from "freactal";

export const ListItems = ({ state }) => <SimpleList value={state.allItems} />;

export default injectState(ListItems);
