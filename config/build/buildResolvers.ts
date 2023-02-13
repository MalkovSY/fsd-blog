import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // расширения каких типов файлов не надо будет указывать при импорте: import Comp from './comp' - без .tsx
    preferAbsolute: true,
    modules: [
      options.paths.src,
      'node_modules',
    ],
    mainFiles: ['index'], // главный файл в папке
    alias: {},
  };
}
