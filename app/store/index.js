import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './reducers';
import { IS_DEV, PERSISTENCE } from './config';

let store;
let persistor;

const middlewares = [];

if (IS_DEV) {
  // eslint-disable-next-line global-require
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

if (PERSISTENCE) {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  store = createStore(persistedReducer, applyMiddleware(...middlewares));
  persistor = persistStore(store);
} else {
  store = createStore(rootReducer, applyMiddleware(...middlewares));
}

export { persistor };
export default store;
