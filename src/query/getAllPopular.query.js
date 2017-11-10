import gql from 'graphql-tag';

export default gql`
  query getAllPopular {
    allPopulars {
      id
      thumbnail
    }
  }
`;
