import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useApi } from './hooks/api';
import { setCatalog } from './store/actions';

import { Routes } from './routes';

import { Catalog } from './screens/catalog';
import { Products } from './screens/products';

const Stack = createNativeStackNavigator();

export const Router = () => {
  const api = useApi();
  const dispatch = useDispatch();

  useEffect(() => {
    const test = async () => {
      const res = await api.getCatalog();

      if (res) {
        dispatch(setCatalog(res));
      }
    };

    test();
  }, []);

  return (
    <Stack.Navigator initialRouteName={Routes.CATALOG}>
      <Stack.Screen name={Routes.CATALOG} component={Catalog} />
      <Stack.Screen name={Routes.PRODUCTS} component={Products} />
    </Stack.Navigator>
  );
};
