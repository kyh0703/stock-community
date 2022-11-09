import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    LogoColor: string;
    headerColor: string;
    headerHoverColor: string;
    headerBackgroundColor: string;
    bodyColor: string;
    bodyBackgroundColor: string;
    buttonColor: string;
    bodyContentColor: string;
    bodyContentBorder: string;
    bodyContentBackgroundColor: string;
    buttonBackgroundColor: string;
    buttonHoverColor: string;
    errorColor: string;
  }
}
