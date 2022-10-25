import { DefaultTheme } from 'styled-components';
import palette from '../lib/styles/palette';

const lightTheme: DefaultTheme = {
  id: 'light',
  LogoColor: 'red',
  headerColor: palette.gray6,
  headerHoverColor: 'black',
  headerBackgroundColor: palette.gray0,
  bodyColor: 'black',
  bodyBackgroundColor: 'white',
  buttonColor: 'black',
  buttonBackgroundColor: 'black',
  buttonHoverColor: 'red',
  errorColor: 'red',
};

export default lightTheme;
