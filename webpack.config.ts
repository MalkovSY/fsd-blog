import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, Configuration } from 'webpack';

const config: Configuration = {
    mode: 'development', // при production код в сборке оптимизирован вебпаком, сжат и нечитаем для человека, минифицирован
    entry: path.resolve(__dirname, 'src', 'index.ts'), // стартовая точка, path.resolve склеивает пути, __dirname текущая папка, далее склеиваемые папки
    output: { // куда и как делаем сборку нашего приложения
        filename: '[name].[contenthash].bundle.js', // Название главного файла сборки приложения, [name] - берется из entry, по дефолту он main (если в entry не указ имя)
        path: path.resolve(__dirname, 'build'), // куда произойдет сборка
        clean: true, // при сборке очищает устаревшие файлы сборки
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'), // использует как шаблон наш html из public
        }), // Генерит html для сборки, с подключенными скриптами
        new ProgressPlugin(),
    ],
    module: {
        rules: [ // здесь конфигурируем лоадеры, они для обработки файлов, выходящих за рамки JS (png, svg, sccs, TS, jpg - любой, кто не .js)
            {
                test: /\.tsx?$/, // регулярка, по которой будут искаться файлы, которые необходимо пропустить через этот лоадер
                use: 'ts-loader', // лоадер, который используется для найденных файлов
                exclude: /node_modules/, // исключаем из обработки нод модули
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // расширения каких типов файлов не надо будет указывать при импорте: import Comp from './comp' - без .tsx
    },
};

// module.exports аналог обычного экспорта JS для NODE JS

export default config;
