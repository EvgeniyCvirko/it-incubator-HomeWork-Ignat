import React, {ChangeEvent} from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    value1: number
    onChangeRangeValue1: (value: number) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,value1, onChangeRangeValue1
        // min, max, step, disable, ...
    }
) => {
        const onChangeCallback = (e:ChangeEvent<HTMLInputElement>) => {
            onChangeRangeValue1(+e.currentTarget.value)
        }
    return (
        <>
            <input
                type={'range'}
                value={value1.toString()}
                onChange={onChangeCallback}
                // className={finalRangeClassName}
                defaultValue='0'

            />
            <input
                type={'range'}
                // onChange={onChangeCallback}
                // className={finalRangeClassName}
                defaultValue='0'

            />
            DoubleRange
        </>
    )
}

export default SuperDoubleRange
