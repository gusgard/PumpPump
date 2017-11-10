import gql from 'graphql-tag';

export default gql`
  query getUser($id: ID!) {
    User(id: $id) {
      id
      name
      thumbnail
      description
      Profiles {
        id
        thumbnail
      }
    }
  }
`;
