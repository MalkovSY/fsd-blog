import { Configuration } from 'webpack';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
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

  // config.module.rules.map((rule) => {
  //
  // });

  config.module.rules.push(buildCssLoaders(true));

  return config;
};
