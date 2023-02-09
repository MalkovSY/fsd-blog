import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';

// module.exports аналог обычного экспорта JS для NODE JS
module.exports = (env: BuildEnv) => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'), // стартовая точка, path.resolve склеивает пути, __dirname текущая папка, далее склеиваемые папки
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'), // использует как шаблон наш html из public
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development'; // при production код в сборке оптимизирован вебпаком, сжат и нечитаем для человека, минифицирован
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
};
