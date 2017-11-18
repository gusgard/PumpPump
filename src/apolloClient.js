import { ApolloClient, createNetworkInterface } from 'react-apollo';

import { API_URL } from '@environment';

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: API_URL,
  }),
});
