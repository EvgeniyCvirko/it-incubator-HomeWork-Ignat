import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string,
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=> void,
    addUser: ()=>void,
    error: string,
    totalUsers: number,
    onKey: (e: KeyboardEvent<HTMLInputElement>)=> void,
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onKey}
) => {
    const inputClass = error === 'error'? s.error:s.error1

    return (
        <div>
            <input value={name} onKeyPress={onKey} onChange={setNameCallback} className={inputClass} />
            <span>{error}</span>
            <button onClick={addUser} >add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
