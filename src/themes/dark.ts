import { DefaultTheme } from 'styled-components';
import palette from '../lib/styles/palette';

const darkTheme: DefaultTheme = {
  id: 'dark',
  LogoColor: 'red',
  headerColor: palette.owlForeground,
  headerHoverColor: palette.owlGreen,
  headerBackgroundColor: palette.owlActiveBarBackground,
  bodyColor: 'white',
  bodyBackgroundColor: palette.owlBackground,
  bodyContentColor: palette.owlForeground,
  bodyContentBorderColor: palette.owlSideBarBorder,
  bodyContentHoverColor: palette.owlCyan,
  bodyContentBackgroundColor: palette.owlSideBarBackground,
  buttonColor: 'black',
  buttonBackgroundColor: 'white',
  buttonHoverColor: 'red',
  errorColor: 'red',
};

export default darkTheme;
