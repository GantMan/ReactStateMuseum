import { gql } from "apollo-boost";

export const ALL_ITEMS = gql`
  {
    allItems @client
  }
`;
