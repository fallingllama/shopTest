import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { SafeAreaView } from 'react-native';
import store, { persistor } from './app/store/index';
import { PERSISTENCE } from './app/store/config';
import { Router } from './app/router';

export const App = () => (
  <Provider store={store}>
    <SafeAreaView>
      {PERSISTENCE ? (
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      ) : (
        <Router />
      )}
    </SafeAreaView>
  </Provider>
);
