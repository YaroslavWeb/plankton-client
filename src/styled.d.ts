import 'styled-components';
import { ThemeType, ThemeBase } from 'styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeBase {
    type: ThemeType
  }
}