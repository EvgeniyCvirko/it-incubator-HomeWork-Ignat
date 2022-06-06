

export type LoadingReducerType = {
    isDone: boolean
}

const initState = {isDone: false}
type LoadingACType = {
    type:"LOADING"
    isDone: boolean
}
export const loadingReducer = (state = initState, action: LoadingACType): LoadingReducerType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isDone:action.isDone}
        }
        default: return state
    }
}

export const loadingAC = (isDone:boolean): LoadingACType => {
       return  {type:"LOADING", isDone}
}// fix any