import { Text } from 'react-native';
import styled from 'styled-components';

export const ThemeStyles = {
  mainContainer: {
    padding: 15,
  },
};

export const ThemeColors = {
  borders: '#3f3f3f',
  itemBackground: '#ffffff',
};

export const H1 = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const H3 = styled(Text)`
  font-weight: bold;
`;
