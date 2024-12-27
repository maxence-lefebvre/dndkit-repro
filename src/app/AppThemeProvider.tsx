import { grassDark, irisDark, slateDark } from '@radix-ui/colors';
import { ThemeProvider, ThemeProviderProps } from '@emotion/react';

const appThemeProvider = {
  colors: {
    ...slateDark,
    ...irisDark,
    ...grassDark,
  },
} as const;

type AppTheme = typeof appThemeProvider;
declare module '@emotion/react' {
  // eslint-disable-next-line
  export interface Theme extends AppTheme {}
}

export const AppThemeProvider = (props: Omit<ThemeProviderProps, 'theme'>) => {
  return <ThemeProvider {...props} theme={appThemeProvider} />;
};
