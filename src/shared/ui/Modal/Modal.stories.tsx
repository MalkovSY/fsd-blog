import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/lib/useTheme/ThemContext';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Normal shared modal',
  isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Dark shared modal',
  isOpen: true,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
