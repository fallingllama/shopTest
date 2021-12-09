import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Text, H3 } from '../theme';
import { ListItem } from './listItem';
import { addOneToCart } from '../store/actions';
import { minsToHourMins } from '../utils';

export const Product = ({ product }) => {
  const { duration, price, title } = product;
  const dispatch = useDispatch();

  const handleProductButton = useCallback(() => {
    dispatch(addOneToCart(product));
  });

  return (
    <ListItem onPress={handleProductButton}>
      <H3>{title}</H3>
      <Text>{minsToHourMins(duration)}</Text>
      <Text>{`${price} € / h`}</Text>
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
