import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import {BuildPath} from "./config/build/types/config";

const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'), // стартовая точка, path.resolve склеивает пути, __dirname текущая папка, далее склеиваемые папки
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html') // использует как шаблон наш html из public
}

const mode = 'development';
const isDev = mode === 'development';

const config = buildWebpackConfig({
    mode, // при production код в сборке оптимизирован вебпаком, сжат и нечитаем для человека, минифицирован
    paths: paths,
    isDev
});

// module.exports аналог обычного экспорта JS для NODE JS
module.exports = config;
