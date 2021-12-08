import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaView, Text } from 'react-native';

import store, { persistor } from './app/store/index';
import { PERSISTENCE } from './app/store/config';

export const App = () => (
  <Provider store={store}>
    {PERSISTENCE ? (
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <Text>Hop</Text>
        </SafeAreaView>
      </PersistGate>
    ) : (
      <SafeAreaView>
        <Text>Hop</Text>
      </SafeAreaView>
    )}
  </Provider>
);
