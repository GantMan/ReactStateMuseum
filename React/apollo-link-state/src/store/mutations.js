import { gql } from "apollo-boost";

export const ADD_ITEMS = gql`
  mutation addItem($newItem: String) {
    addItem(newItem: $newItem) @client
  }
`;

export const CLEAN_ITEMS = gql`
  mutation cleanItems($items: String) {
    cleanItems(items: $items) @client
  }
`;
