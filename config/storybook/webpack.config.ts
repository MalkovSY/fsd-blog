import { Configuration, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPath } from '../build/types/config';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule, exclude: /\.svg$/i,
      };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  });
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.modules.')),
            localIdentName: '[path][name]__[local]',
          },
        },
      },
      'sass-loader',
    ],
  });

  return config;
};
