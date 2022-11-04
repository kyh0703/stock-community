import { DefaultTheme } from 'styled-components';
import palette from '../lib/styles/palette';

const darkTheme: DefaultTheme = {
  id: 'dark',
  LogoColor: 'red',
  headerColor: palette.owl2,
  headerHoverColor: 'white',
  headerBackgroundColor: palette.owl1,
  bodyColor: 'white',
  bodyBackgroundColor: palette.owl0,
  bodyContentColor: 'white',
  bodyContentBackgroundColor: palette.gray7,
  buttonColor: 'black',
  buttonBackgroundColor: 'white',
  buttonHoverColor: 'red',
  errorColor: 'red',
};

export default darkTheme;
