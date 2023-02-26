import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): Array<WebpackPluginInstance> {
  const { paths: { html }, isDev } = options;

  return [
    new HtmlWebpackPlugin({
      template: html,
      favicon: 'src/shared/assets/icons/logo.png',
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: isDev ? 'server' : 'disabled',
    }),
  ];
}
