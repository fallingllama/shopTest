import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { Category } from './atoms/category';
import { ThemeStyles, H1 } from './theme';

export const Catalog = () => {
  const { categories, title } = useSelector(({ catalog }) => catalog);

  return (
    <View style={{ ...ThemeStyles.mainContainer }}>
      {title ? (
        <H1>
          {title}
          {' '}
          categories
        </H1>
      ) : null}
      {categories.map(cat => (
        <Category
          products={cat.prestations}
          title={cat.title}
          reference={cat.reference}
          key={`category-${cat.title}`}
        />
      ))}
    </View>
  );
};
