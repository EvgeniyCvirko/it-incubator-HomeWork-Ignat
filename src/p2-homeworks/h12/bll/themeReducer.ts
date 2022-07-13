export type ThemeReducerType = {
    theme: string
}

type ChangeThemeAC = {
    type: string
    theme: string
}

const initState = {
    theme: ""
};

export const themeReducer = (state = initState, action: ChangeThemeAC): ThemeReducerType => {
    switch (action.type) {
        case "Change_Theme": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};
export const changeThemeC = (theme: string): ChangeThemeAC => ({type: "Change_Theme", theme} as const);