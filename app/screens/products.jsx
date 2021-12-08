import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View } from 'react-native';
import { ThemeStyles, H1 } from '../theme';

export const Products = ({ route }) => {
  const { title } = route.params || {};

  return (
    <SafeAreaView>
      <View style={{ ...ThemeStyles.mainContainer }}>
        {title ? <H1>Prestations {title}</H1> : null}
      </View>
    </SafeAreaView>
  );
};

Products.propTypes = {
  route: PropTypes.object.isRequired,
};
