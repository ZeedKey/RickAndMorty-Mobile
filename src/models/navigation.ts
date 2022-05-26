import { Routes } from "src/navigation/routes"

export interface CharacterNavigatorParamsList {
    [Routes.CharacterScreen]: {
        name: Routes
    },
    [Routes.CharacterStack]: {
        initialRouteName: Routes
    },
    [Routes.CharacterDetails]: {
        id: string
        name: string
    },
  }