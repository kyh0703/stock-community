import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    bodyColor: string;
    bodyBackgroundColor: string;
  }
}
