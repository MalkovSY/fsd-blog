import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins(options: BuildOptions): Array<WebpackPluginInstance> {
    const { paths: { html } } = options;

    return [
        new HtmlWebpackPlugin({
            template: html,
        }), // Генерит html для сборки, с подключенными скриптами
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ]
}
