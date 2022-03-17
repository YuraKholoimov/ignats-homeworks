import {initialPeopleType} from "../HW8";

type ActionType = {
    type: 'sort' | 'check'
    payload: 'up' | "down" | 18
}

export const homeWorkReducer = (state: initialPeopleType, action: ActionType): initialPeopleType => { // need to fix any
    switch (action.type) {
        case 'sort':
            if (action.payload == "up")
                return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
            else if (action.payload == "down")
                return [...state.sort((a, b) => a.name < b.name ? 1 : -1)]
            return state

        case 'check':
            return [...state.filter(i => i.age > action.payload ? i : null )]
        default:
            return state
    }
}