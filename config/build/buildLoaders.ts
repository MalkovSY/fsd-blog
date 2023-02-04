import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(): Array<RuleSetRule> {
// Порядок при котором лоадеры возвращаются в массиве ИМЕЕТ значение, поэтому удобно их выносить в переменные, чтобы видеть четкую последовательность
    const typScriptLoader = {
            test: /\.tsx?$/, // регулярка, по которой будут искаться файлы, которые необходимо пропустить через этот лоадер
            use: 'ts-loader', // лоадер, который используется для найденных файлов
            exclude: /node_modules/, // исключаем из обработки нод модули
        };

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [ // В этом лоадере уже очень важен порядок лоадеров:
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    return  [ // здесь конфигурируем лоадеры, они для обработки файлов, выходящих за рамки JS (png, svg, sccs, TS, jpg - любой, кто не .js)
        typScriptLoader,
        cssLoaders
    ]
}
