import {AvailableModuleManager, ModuleConfig, ModulePath} from "@core/module";

export const Modules: ModuleConfig[] = [
    {
        enabled: true,
        id: "shared",
        path: ModulePath.ROOT,
        managers: [
            AvailableModuleManager.COMMANDS,
            AvailableModuleManager.EVENTS,
            AvailableModuleManager.INHIBITORS,
            AvailableModuleManager.BUTTONS,
            AvailableModuleManager.SELECT_MENUS
        ]
    },
    {
        enabled: true,
        id: "blackjack",
        path: ModulePath.GAMES,
        managers: [
            AvailableModuleManager.EVENTS
        ]
    }
]