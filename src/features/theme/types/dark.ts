import { DefaultTheme } from 'styled-components';
import palette from '../../../lib/styles/palette';

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
  askModalBackgroundColor: palette.gray9,
  askModalShadowColor: 'rgba(0,50,20,0.7)',
};

export default darkTheme;
