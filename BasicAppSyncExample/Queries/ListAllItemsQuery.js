import gql from 'graphql-tag';

export default gql`
query ListAllItems {
  listListItems {
    items {
      id
      name
    }
  }
}`
