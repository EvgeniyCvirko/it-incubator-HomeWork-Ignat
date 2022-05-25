import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})
    const endState = initialState.sort((a,b) => {
        if(a.name < b.name) return 1;
        if(a.name > b.name) return -1;
        return 0 ;
    })
    expect(newState.length).toBe(6)
    expect(newState[0].name).toBe(endState[0].name)
    expect(newState[2].name).toBe(endState[2].name)
    expect(newState[5].name).toBe(endState[5].name)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    const endState = initialState.sort((a,b) => {
        if(a.name > b.name) return 1;
        if(a.name < b.name) return -1;
        return 0 ;
    })
    expect(newState.length).toBe(6)
    expect(newState[0].name).toBe(endState[0].name)
    expect(newState[2].name).toBe(endState[2].name)
    expect(newState[5].name).toBe(endState[5].name)

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})
    const endState = initialState.filter(e => e.age >= 18)
    expect(newState.length).toBe(4)
    expect(newState[0].age).toBe(endState[0].age)
    expect(newState[1].age).toBe(endState[1].age)
    expect(newState[2].age).toBe(endState[2].age)
    expect(newState[3].age).toBe(endState[3].age)
})
