import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;
  const { entry, build } = paths;

  return {
    mode,
    entry,
    output: { // куда и как делаем сборку нашего приложения
      filename: '[name].[contenthash].bundle.js', // Название главного файла сборки приложения, [name] - берется из entry, по дефолту он main (если в entry не указ имя)
      path: build, // куда произойдет сборка
      clean: true, // при сборке очищает устаревшие файлы сборки
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
