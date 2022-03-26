export enum ModulePath {
    ROOT = './',
    GAMES = './games'
}

export enum AvailableModuleManager {
    BUTTONS,
    COMMANDS,
    EVENTS,
    INHIBITORS,
    SELECT_MENUS
}

export interface ModuleConfig {
    id: string,
    path: ModulePath|string
    enabled: boolean,
    managers: AvailableModuleManager[]
}