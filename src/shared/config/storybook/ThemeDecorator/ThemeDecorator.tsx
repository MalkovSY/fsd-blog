import { Story } from '@storybook/react';
import { Theme } from 'shared/lib/useTheme/ThemContext';

export const ThemeDecorator = (theme: Theme) => (Story: Story) => <div className={`app ${theme}`}><Story /></div>;
