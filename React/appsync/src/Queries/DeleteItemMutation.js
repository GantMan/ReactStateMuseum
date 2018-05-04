import gql from "graphql-tag";

export default gql`
  mutation deleteListItem($id: ID!) {
    deleteListItem(input: { id: $id }) {
      id
    }
  }
`;
