import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildPath } from "./types/config";

export function buildPlugins(paths: BuildPath): Array<WebpackPluginInstance> {
    const { html } = paths;

    return [
        new HtmlWebpackPlugin({
            template: html,
        }), // Генерит html для сборки, с подключенными скриптами
        new ProgressPlugin(),
    ]
}
