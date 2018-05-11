import { CreateClient } from "./";
import { defaults } from "./defaults";
import { resolvers } from "./resolvers";
import { schema as typeDefs } from "./schema";

export const client = new CreateClient({
  uri: "https://nx9zvp49q7.lp.gql.zone/graphql",
  clientState: {
    defaults,
    resolvers,
    typeDefs
  }
});
