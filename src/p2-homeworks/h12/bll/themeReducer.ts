const initState = {
    theme: {
        color: "some",
    },
};

export type initialStateTheme = typeof initState

export type changeThemeCType = ReturnType<typeof changeThemeC>

export const themeReducer = (state: initialStateTheme = initState, action: changeThemeCType): initialStateTheme => { // fix any
    switch (action.type) {
        case "SET_THEME": {
            return {...state,
            theme: {
                color: action.payload
            }}
        }
        default:
            return state;
    }
};

export const changeThemeC = (payload: string) => ({type: "SET_THEME", payload} as const)