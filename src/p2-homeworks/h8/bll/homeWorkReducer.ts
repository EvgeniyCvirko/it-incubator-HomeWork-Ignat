export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
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
            const newState = [...state].filter(e => e.age >= 18)
            return newState
        }
        default: return state
    }
}