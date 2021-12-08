import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView } from 'react-native';
import { ThemeStyles, H1 } from '../theme';

import { Product } from '../atoms/product';

export const Products = ({ route }) => {
  const { title, prestations } = route.params || {};

  return (
    <SafeAreaView>
      <ScrollView style={{ ...ThemeStyles.mainContainer }}>
        {title ? <H1>Prestations {title}</H1> : null}
        {prestations.map(product => (
          <Product key={`product-${product.title}`} {...product} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

Products.propTypes = {
  route: PropTypes.object.isRequired,
};
