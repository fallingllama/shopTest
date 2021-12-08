import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';

import { H3, ThemeColors } from '../theme';

const ProductContainer = styled(TouchableOpacity)`
  border: 1px solid ${ThemeColors.borders};
  border-radius: 15px;
  padding: 20px;
  margin: 5px;
`;

export const Product = ({ duration, price, reference, title }) => {
  const handleProductButton = useCallback(() => {
    console.log(reference, 'button pressed');
    // TODO: add to basket
  });

  return (
    <ProductContainer onPress={handleProductButton}>
      <H3>{title}</H3>
      <Text>{reference}</Text>
      <Text>{price}</Text>
      <Text>{duration}</Text>
    </ProductContainer>
  );
};

Product.propTypes = {
  duration: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  reference: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
