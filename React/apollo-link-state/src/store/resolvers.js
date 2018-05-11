import { queries } from "./";

export const resolvers = {
  Mutation: {
    addItem: (_, { newItem }, { cache }) => {
      const { allItems } = cache.readQuery({ query: queries.ALL_ITEMS });

      const data = {
        allItems: allItems.concat([newItem])
      };

      cache.writeData({ data });
      return null;
    },
    cleanItems: (_, params, { cache }) => {
      const data = {
        allItems: []
      };

      cache.writeData({ data });
      return null;
    }
  }
};
