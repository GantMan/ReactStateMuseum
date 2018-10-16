import ApolloClient, { gql } from "apollo-boost";

const defaults = {
  items: ["nacho", "burrito", "hotdog"],
  newItem: "",
};

const resolvers = {
  Mutation: {
    addItem: (_, _params, { cache }) => {
      const { items, newItem } = cache.readQuery({
        query: gql`
          {
            items @client
            newItem @client
          }
        `
      });
      const data = { items: items.concat([newItem]), newItem: "" };
      cache.writeData({ data });
      return null;
    },
    clearItems: (_, _params, { cache }) => {
      const data = { items: [] };
      cache.writeData({ data });
      return null;
    },
    updateNewItem: (_, { text }, { cache }) => {
      const data = { newItem: text }
      cache.writeData({ data });
      return null;
    },
  }
};

export const typeDefs = `
  type Query {
    items @client
    newItem @client
  }
`;

export const client = new ApolloClient({
  uri: "https://nx9zvp49q7.lp.gql.zone/graphql",
  clientState: {
    defaults,
    resolvers,
    typeDefs,
  }
});
