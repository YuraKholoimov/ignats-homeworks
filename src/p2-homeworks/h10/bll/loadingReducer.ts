export type InitStateType = typeof initState

const initState = {
    isLoading: false
}

export const loadingReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case "IS-LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export type ActionsType = ReturnType<typeof IsLoadingAC>

export const IsLoadingAC = (isLoading: boolean) => ({type: "IS-LOADING", isLoading} as const) // fix any