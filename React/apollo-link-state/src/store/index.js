import * as queries from "./queries";
import * as mutations from "./mutations";

export { default as CreateClient } from "apollo-boost";
export { ApolloProvider as Provider, Query, Mutation } from "react-apollo";

export { client } from "./client";
export { queries, mutations };
