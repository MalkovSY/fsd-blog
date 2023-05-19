import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/lib/useTheme/ThemContext';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator()];

export const NormalError = Template.bind({});
NormalError.args = {};
NormalError.decorators = [StoreDecorator({ loginForm: { username: 'User', password: '12345', error: 'Неверный логин или пароль' } })];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator(), ThemeDecorator(Theme.DARK)];

export const DarkError = Template.bind({});
DarkError.args = {};
DarkError.decorators = [StoreDecorator({ loginForm: { username: 'User', password: '12345', error: 'Неверный логин или пароль' } }), ThemeDecorator(Theme.DARK)];
