import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './app/store/index';
import { PERSISTENCE } from './app/store/config';
import { Router } from './app/router';

export const App = () => (
  <Provider store={store}>
    {PERSISTENCE ? (
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    ) : (
      <Router />
    )}
  </Provider>
);
