import {ModuleConfig, ModulePath} from "@core/module";

export const Modules: ModuleConfig[] = [
    {
        enabled: true,
        id: "shared",
        path: ModulePath.ROOT
    },
    {
        enabled: true,
        id: "blackjack",
        path: ModulePath.GAMES
    }
]