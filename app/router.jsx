import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useApi } from './hooks/api';
import { setCatalog } from './store/actions';

import { Catalog } from './catalog';

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

  return <Catalog />;
};
