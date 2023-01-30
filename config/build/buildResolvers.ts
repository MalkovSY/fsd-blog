import { ResolveOptions } from 'webpack'

export function buildResolvers(): ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'], // расширения каких типов файлов не надо будет указывать при импорте: import Comp from './comp' - без .tsx
    };
}
