import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getCart } from '../store/selectors';
import { ThemeColors, ThemeStyles } from '../theme';
import { Routes } from '../routes';
import { getDurationTotal, getPriceTotal, getQtyTotal } from '../utils';

const CartContainer = styled(TouchableOpacity)`
  border-radius: 15px;
  background-color: ${ThemeColors.itemBackground};
  padding: 20px;
  margin: 5px;
`;

export const CartLine = ({ navigation }) => {
  const [totals, setTotals] = useState({ duration: 0, price: 0, qty: 0 });
  const cart = useSelector(getCart);

  useEffect(() => {
    setTotals({
      duration: getDurationTotal(cart),
      price: getPriceTotal(cart),
      qty: getQtyTotal(cart),
    });
  }, [cart]);

  const handleCartButton = useCallback(() => {
    navigation.push(Routes.CART);
  });

  return (
    <CartContainer onPress={handleCartButton} style={{ ...ThemeStyles.mainContainer }}>
      <Text>
        {`Items in cart: ${totals.qty} | ${totals.duration} | ${totals.price} €`}
      </Text>
    </CartContainer>
  );
};

CartLine.propTypes = {
  navigation: PropTypes.object.isRequired,
};
