import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Category } from '../atoms/category';
import { ThemeStyles, H1 } from '../theme';
import { Routes } from '../routes';

export const Catalog = ({ navigation }) => {
  const { categories, title } = useSelector(({ catalog }) => catalog);

  const handleCategoryButton = useCallback(cat => () => {
    navigation.push(Routes.PRODUCTS, cat);
  });

  return (
    <SafeAreaView>
      <View style={{ ...ThemeStyles.mainContainer }}>
        {title ? <H1>{title} categories</H1> : null}
        {categories.map(cat => (
          <Category
            products={cat.prestations}
            title={cat.title}
            reference={cat.reference}
            key={`category-${cat.title}`}
            onPress={handleCategoryButton(cat)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

Catalog.propTypes = {
  navigation: PropTypes.object.isRequired,
};
