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
    bodyContentBorderColor: string;
    bodyContentBackgroundColor: string;
    bodyContentHoverColor: string;
    buttonBackgroundColor: string;
    buttonHoverColor: string;
    errorColor: string;
  }
}
