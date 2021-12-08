import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { H3 } from '../theme';
import { ListItem } from './listItem';
import { addOneToCart } from '../store/actions';

export const Product = product => {
  const { duration, price, reference, title } = product;
  const dispatch = useDispatch();

  const handleProductButton = useCallback(() => {
    dispatch(addOneToCart(product));
  });

  return (
    <ListItem onPress={handleProductButton}>
      <H3>{title}</H3>
      <Text>{reference}</Text>
      <Text>{price}</Text>
      <Text>{duration}</Text>
    </ListItem>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    duration: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    reference: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
