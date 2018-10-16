import { gql } from "apollo-boost";

export const addItem = gql`
  mutation addItem {
    addItem @client
  }
`;

export const clearItems = gql`
  mutation clearItems {
    clearItems @client
  }
`;

export const updateNewItem = gql`
  mutation updateNewItem($text: String) {
    updateNewItem(text: $text) @client
  }
`;
