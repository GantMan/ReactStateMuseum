import gql from "graphql-tag";

export default gql`
  mutation NewItem($id: ID!, $itemName: String!) {
    createListItem(input: { id: $id, name: $itemName }) {
      id
    }
  }
`;
