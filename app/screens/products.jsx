import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { ThemeStyles, H1 } from '../theme';

import { Product } from '../atoms/product';
import { CartLine } from '../atoms/cartLine';

export const Products = ({ navigation, route }) => {
  const { title, prestations } = route.params || {};

  return (
    <>
      <View style={{ ...ThemeStyles.mainContainer }}>
        <ScrollView style={{ height: '90%' }}>
          {title ? <H1>{title} products</H1> : null}
          {prestations.map(product => (
            <Product key={`product-${product.title}`} product={product} />
          ))}
        </ScrollView>
      </View>
      <SafeAreaView>
        <CartLine navigation={navigation} />
      </SafeAreaView>
    </>
  );
};

Products.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};
