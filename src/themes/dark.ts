import { DefaultTheme } from 'styled-components';
import palette from '../lib/styles/palette';

const darkTheme: DefaultTheme = {
  id: 'dark',
  LogoColor: 'red',
  headerColor: palette.owlForeground,
  headerHoverColor: 'white',
  headerBackgroundColor: palette.owlActiveBarBackground,
  bodyColor: 'white',
  bodyBackgroundColor: palette.owlBackground,
  bodyContentColor: palette.owlForeground,
  bodyContentBackgroundColor: palette.owlSideBarBorder,
  buttonColor: 'black',
  buttonBackgroundColor: 'white',
  buttonHoverColor: 'red',
  errorColor: 'red',
};

export default darkTheme;
