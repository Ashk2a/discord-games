export enum ModulePath {
    ROOT = './',
    GAMES = './games'
}

export interface ModuleConfig {
    enabled: boolean,
    id: string,
    path: ModulePath|string
}