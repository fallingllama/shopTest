import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getCart } from '../store/selectors';
import { H1, H3, ThemeStyles } from '../theme';
import { getDurationTotal, getPriceTotal } from '../utils';

export const Cart = () => {
  const [totals, setTotals] = useState({ duration: 0, price: 0 });
  const cart = useSelector(getCart);

  useEffect(() => {
    setTotals({
      duration: getDurationTotal(cart),
      price: getPriceTotal(cart),
    });
  }, [cart]);

  return (
    <SafeAreaView>
      <View style={{ ...ThemeStyles.mainContainer }}>
        <H1>Items in cart:</H1>
        {cart.length ? (
          cart.map(p => <Text>{`${p.qty} x ${p.title}`}</Text>)
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
      </View>
    </SafeAreaView>
  );
};
