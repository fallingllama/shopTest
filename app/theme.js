import { Text } from 'react-native';
import styled from 'styled-components';

export const ThemeStyles = {
  mainContainer: {
    padding: 15,
    flexGrow: 1,
  },
};

export const ThemeColors = {
  borders: '#aaaaaa',
  itemBackground: '#ffffff',
  danger: '#A00',
};

export const H1 = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const H3 = styled(Text)`
  font-weight: bold;
`;
