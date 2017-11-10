import { AsyncStorage } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';

import client from './apolloClient';

import { home } from './screens';

const middleware = [thunk.withExtraArgument(client), client.middleware()];

export default (data = {}) => {
  const appReducer = combineReducers({
    [home.NAME]: home.reducer,
    apollo: client.reducer(),
  });

  const compose = composeWithDevTools(
    applyMiddleware(...middleware),
    autoRehydrate(),
  );
  const store = createStore(appReducer, data, compose);

  // Persist and rehydrate a redux store
  persistStore(store, {
    storage: AsyncStorage,
    // Reducers to persist
    whitelist: [home.NAME],
  });
  // Add purge to delete the persist store.
  // .purge();

  return store;
};
