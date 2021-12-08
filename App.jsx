import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import store, { persistor } from './app/store/index';
import { PERSISTENCE } from './app/store/config';
import { Router } from './app/router';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      {PERSISTENCE ? (
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      ) : (
        <Router />
      )}
    </NavigationContainer>
  </Provider>
);

export default gestureHandlerRootHOC(App);
