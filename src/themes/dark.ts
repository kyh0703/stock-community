import { DefaultTheme } from 'styled-components';
import palette from '../lib/styles/palette';

const darkTheme: DefaultTheme = {
  id: 'dark',
  LogoColor: 'red',
  headerColor: palette.gray2,
  headerHoverColor: 'white',
  headerBackgroundColor: palette.gray8,
  bodyColor: 'white',
  bodyBackgroundColor: 'black',
  buttonColor: 'black',
  buttonBackgroundColor: 'white',
  buttonHoverColor: 'red',
  errorColor: 'red',
};

export default darkTheme;
