import { DefaultTheme } from 'styled-components';
import palette from '../lib/styles/palette';

const lightTheme: DefaultTheme = {
  id: 'light',
  LogoColor: 'red',
  headerColor: palette.gray6,
  headerHoverColor: 'black',
  headerBackgroundColor: 'white',
  bodyColor: 'black',
  bodyBackgroundColor: 'white',
  bodyContentColor: 'black',
  bodyContentBorderColor: palette.gray1,
  bodyContentHoverColor: palette.owlCyan,
  bodyContentBackgroundColor: 'white',
  buttonColor: 'black',
  buttonBackgroundColor: 'black',
  buttonHoverColor: 'red',
  errorColor: 'red',
};

export default lightTheme;
