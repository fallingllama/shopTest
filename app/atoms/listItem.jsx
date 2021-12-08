import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { ThemeColors } from '../theme';

export const ListItem = styled(TouchableOpacity)`
  border: 1px solid ${ThemeColors.borders};
  border-radius: 15px;
  background-color: ${ThemeColors.itemBackground};
  padding: 20px;
  margin: 5px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
