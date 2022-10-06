import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    red: string;
    block: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
  }
}
