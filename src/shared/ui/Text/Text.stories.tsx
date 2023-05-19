import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/lib/useTheme/ThemContext';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const NormalWithTitle = Template.bind({});

NormalWithTitle.args = {
  title: 'Title',
  text: 'Text',
};

export const NormalWithoutTitle = Template.bind({});

NormalWithoutTitle.args = {
  text: 'Text',
};

export const NormalError = Template.bind({});

NormalError.args = {
  title: 'Title',
  text: 'Text',
  theme: TextTheme.ERROR,
};

export const DarkWithTitle = Template.bind({});

DarkWithTitle.args = {
  title: 'Title',
  text: 'Text',
};

DarkWithTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkWithoutTitle = Template.bind({});

DarkWithoutTitle.args = {
  text: 'Text',
};

DarkWithoutTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkError = Template.bind({});

DarkError.args = {
  title: 'Title',
  text: 'Text',
  theme: TextTheme.ERROR,
};
