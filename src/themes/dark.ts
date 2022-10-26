import { DefaultTheme } from 'styled-components';
import palette from '../lib/styles/palette';

const darkTheme: DefaultTheme = {
  id: 'dark',
  LogoColor: 'red',
  headerColor: palette.gray2,
  headerHoverColor: 'white',
  headerBackgroundColor: palette.gray9,
  bodyColor: 'white',
  bodyBackgroundColor: palette.gray8,
  bodyContentColor: 'white',
  bodyContentBackgroundColor: palette.gray7,
  buttonColor: 'black',
  buttonBackgroundColor: 'white',
  buttonHoverColor: 'red',
  errorColor: 'red',
};

export default darkTheme;
