import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    let [value, setValue] = useState<number[]>([0, 100])
   const onChangeRange = (nb: number) =>{
       setValue([nb,value[1]])
}
    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <span>{value[0]}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value1={value[0]}
                />
            </div>

            <div>
                <SuperDoubleRange
                    value={value}
                    onChangeRange={setValue}
                />
            </div>

            <hr/>
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
