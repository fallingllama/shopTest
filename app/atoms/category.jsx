import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { H3, ThemeColors } from '../theme';

const CategoryContainer = styled(TouchableOpacity)`
  border: 1px solid ${ThemeColors.borders};
  border-radius: 15px;
  padding: 20px;
  margin: 5px;
`;

export const Category = ({
  products, reference, title, ...props
}) => (
  <CategoryContainer {...props}>
    <H3>{title}</H3>
  </CategoryContainer>
);

Category.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  reference: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
