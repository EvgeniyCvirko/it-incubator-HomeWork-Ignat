import {UserType} from "../HW8";

export type ActionType={
    type: string;
    payload: string | number
}



export const homeWorkReducer = (state: UserType[], action: ActionType):  UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
                    })

            return action.payload === 'up' ? newState: newState.reverse()
        }
        case 'check': {
            return [...state].filter(e => e.age >= 18)
        }
        default: return state
    }
}