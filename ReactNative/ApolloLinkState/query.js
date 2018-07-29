import gql from "graphql-tag";

export const ALL_ITEMS = gql`
  query {
    allItems @client
  }
`;

export const typeDefs = `
  type Query {
    allItems @client
}`;