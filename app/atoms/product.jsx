import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import { H3 } from '../theme';
import { ListItem } from './listItem';

export const Product = ({ duration, price, reference, title }) => {
  const handleProductButton = useCallback(() => {
    console.log(reference, 'button pressed');
    // TODO: add to basket
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
  duration: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  reference: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
