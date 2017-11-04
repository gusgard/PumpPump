import React from 'react';
import { Provider } from 'react-redux';

import { HomeMainScreen } from 'PumpPump/src/screens';

import createStore from './createStore';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <HomeMainScreen />
  </Provider>
);

export default App;
