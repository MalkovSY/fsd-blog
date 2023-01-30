import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";

export function buildPlugins(options: BuildOptions): Array<WebpackPluginInstance> {
    const { paths: { html } } = options;

    return [
        new HtmlWebpackPlugin({
            template: html,
        }), // Генерит html для сборки, с подключенными скриптами
        new ProgressPlugin(),
    ]
}
