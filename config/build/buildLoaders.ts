import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/cssLoaders';

export function buildLoaders({ isDev }: BuildOptions): Array<RuleSetRule> {
  const babelLoader = {
    test: /\.(jsx?|tsx?)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
              outputPath: 'public/locales/{{locale}}/{{ns}}.json',
            },
          ],
        ],
      },
    },
  };

  const typScriptLoader = {
    test: /\.tsx?$/, // регулярка, по которой будут искаться файлы, которые необходимо пропустить через этот лоадер
    use: 'ts-loader', // лоадер, который используется для найденных файлов
    exclude: /node_modules/, // исключаем из обработки нод модули
  };

  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoaders = buildCssLoaders(isDev);

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typScriptLoader,
    cssLoaders,
  ];
}
