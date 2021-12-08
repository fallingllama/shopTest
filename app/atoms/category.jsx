import React from 'react';
import PropTypes from 'prop-types';
import { H3 } from '../theme';
import { ListItem } from './listItem';

export const Category = ({ products, reference, title, ...props }) => (
  <ListItem {...props}>
    <H3>{title}</H3>
  </ListItem>
);

Category.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  reference: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
