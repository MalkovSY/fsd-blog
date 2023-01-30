import { Configuration } from "webpack";

export type BuildMode = Configuration['mode'];

export type BuildPath = {
    entry: string;
    build: string;
    html: string;

}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPath;
    isDev: boolean;
    port: number;
}
