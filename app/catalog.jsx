import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useSelector } from 'react-redux';

export const Catalog = () => {
  const { categories, title } = useSelector(({ catalog }) => catalog);

  return (
    <SafeAreaView>
      {title ? <Text>{title}</Text> : null}
      {categories.map(cat => (
        <Text key={`category-${cat.title}`}>{cat.title}</Text>
      ))}
    </SafeAreaView>
  );
};
