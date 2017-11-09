import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { HomeMainScreen } from 'GraphqlExample/src/screens';

import client from './apolloClient';
import createStore from './createStore';

const store = createStore();

const App = () => (
  <ApolloProvider store={store} client={client}>
    <HomeMainScreen />
  </ApolloProvider>
);

export default App;
