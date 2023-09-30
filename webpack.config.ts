import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';

const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env'),
});

module.exports = (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'), // стартовая точка, path.resolve склеивает пути, __dirname текущая папка, далее склеиваемые папки
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'), // использует как шаблон наш html из public
    src: path.resolve(__dirname, 'src'),
  };
  const { apiUrl } = dotenv.parsed;

  const mode = env.mode || 'development'; // при production код в сборке оптимизирован вебпаком, сжат и нечитаем для человека, минифицирован
  const PORT = env.port || 3000;
  const isDev = mode === 'development';

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
  });
};
