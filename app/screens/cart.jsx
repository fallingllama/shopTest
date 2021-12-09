import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  clearCart,
  removeAllOfReferenceFromCart,
  removeOneFromCart,
} from '../store/actions';
import { getCart } from '../store/selectors';
import { Text, H1, H3, ThemeColors, ThemeStyles } from '../theme';
import { getDurationTotal, getPriceTotal } from '../utils';

const RemoveLink = styled(H3)`
  color: ${ThemeColors.danger};
`;

const CartItem = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Cart = () => {
  const [totals, setTotals] = useState({ duration: 0, price: 0 });
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotals({
      duration: getDurationTotal(cart),
      price: getPriceTotal(cart),
    });
  }, [cart]);

  const handleRemoveOneItem = useCallback(reference => () => {
    dispatch(removeOneFromCart(reference));
  });

  const handleRemoveAllOfItem = useCallback(reference => () => {
    dispatch(removeAllOfReferenceFromCart(reference));
  });

  const handleResetCart = useCallback(() => {
    dispatch(clearCart());
  });

  return (
    <SafeAreaView>
      <View style={{ ...ThemeStyles.mainContainer }}>
        <H1>Items in cart:</H1>
        {cart.length ? (
          cart.map(p => (
            <CartItem key={`cart-product-${p.reference}`}>
              <Text>{`${p.qty} x ${p.title}`}</Text>
              <View style={{ flexDirection: 'row' }}>
                {p.qty > 1 ? (
                  <>
                    <TouchableOpacity onPress={handleRemoveOneItem(p.reference)}>
                      <RemoveLink>Remove one</RemoveLink>
                    </TouchableOpacity>
                    <Text> | </Text>
                  </>
                ) : null}
                <TouchableOpacity onPress={handleRemoveAllOfItem(p.reference)}>
                  <RemoveLink>Remove all</RemoveLink>
                </TouchableOpacity>
              </View>
            </CartItem>
          ))
        ) : (
          <Text>Nothing here, go shop & go wild!</Text>
        )}

        <View
          style={{
            borderTopColor: '#000',
            borderTopWidth: 1,
            marginTop: 30,
            paddingTop: 10,
          }}>
          <H3>Total time: {totals.duration}</H3>
          <H3>Total price: {totals.price} €</H3>
        </View>

        <TouchableOpacity onPress={handleResetCart} style={{ marginTop: 20 }}>
          <H3 style={{ color: ThemeColors.danger }}>Reset cart</H3>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
