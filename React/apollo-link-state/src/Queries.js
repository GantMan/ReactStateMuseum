import { gql } from "apollo-boost";

export const items = gql`
  {
    items @client
  }
`;

export const newItem = gql`
  {
    newItem @client
  }
`;
