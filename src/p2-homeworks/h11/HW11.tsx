import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {log} from "util";

function HW11() {
    // let [value1, setValue1] = useState(0)
    // const [value2, setValue2] = useState(100)
    let value1 = 0
    let value = 100

    let [value2, setValue2] = useState<number[]>([0, 100])
     // value2[0] = value1
   const aaa = (v: number) =>{
       setValue2([v,value2[1]])
}
    console.log(value2[0])
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value2[0]}</span>
                <SuperRange
                    onChangeRange={aaa}
                    value1={value2[0]}
                />
            </div>

            <div>
                <span>{value2[0]}</span>
                <SuperDoubleRange
                    value2={value2}
                    onChangeRange={setValue2}

                />
                <span>{value2[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
