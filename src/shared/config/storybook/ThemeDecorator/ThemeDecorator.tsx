import { Story } from '@storybook/react';
import { Theme } from 'shared/lib/useTheme/ThemContext';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}><Story /></div>
  </ThemeProvider>
);
