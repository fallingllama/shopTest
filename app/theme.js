import { Text as RNText } from 'react-native';
import styled from 'styled-components';

export const ThemeStyles = {
  mainContainer: {
    padding: 15,
    flexGrow: 1,
  },
};

export const ThemeColors = {
  fontMain: '#000',
  borders: '#aaa',
  itemBackground: '#fff',
  danger: '#A00',
};

export const Text = styled(RNText)`
  color: ${ThemeColors.fontMain};
`;

export const H1 = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const H3 = styled(Text)`
  font-weight: bold;
`;
