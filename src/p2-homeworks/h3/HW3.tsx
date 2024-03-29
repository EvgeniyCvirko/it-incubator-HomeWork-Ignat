import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

export type UserType = {
    _id: string,
    name: string,
}


function HW3() {
    const [users, setUsers] = useState<UserType[]>([
        {_id: v1(), name:''},
    ])

    const addUserCallback = (name: string) => {
        let newUser = {_id: v1(), name:name}

        setUsers([ newUser, ...users])
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
