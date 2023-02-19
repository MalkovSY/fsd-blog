import path from 'path';
import { Configuration } from 'webpack';
import { buildCssLoaders } from '../build/loaders/cssLoaders';

module.exports = {
  stories: [
    '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config: Configuration) => {
    config.resolve.extensions.push('.tsx', '.ts', '.js');
    config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'));
    config.module.rules.push(buildCssLoaders(true));

    return config;
  },
};
