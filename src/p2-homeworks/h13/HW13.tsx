import React, {ChangeEvent, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {requestsAPI} from "./api/RequestsAPI";


function HW13() {
    const [checked, setChecked] = useState<boolean>(false)
    const checkedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }
    const onclickHandler = () => {
        requestsAPI.createRequests(checked)
            .then(response => console.log(response.data))
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div>
            <hr/>
            <input
                type={'checkbox'}
                checked={checked}
                onChange={checkedHandler}/>
            <SuperButton onClick={onclickHandler}> Submit </SuperButton>
            <hr/>
        </div>
    );
}

export default HW13;
