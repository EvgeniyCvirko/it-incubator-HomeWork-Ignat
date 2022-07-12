import React, {ChangeEvent} from 'react'
import {Box, Slider} from "@mui/material";
type SuperDoubleRangePropsType = {
    onChangeRange: (value: number[]) => void
    value2: number[]
    // onChangeRangeValue1: (value: number) => void
    //min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
          onChangeRange,value2,
       // min, max, step, disable, ...
    }
) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange(newValue as number[]);
    };
    return (
        <>
            <Box sx={{ width: 200 }}
            ><Slider
                value={value2}
                onChange={handleChange}
                valueLabelDisplay="auto"
            /></Box>
        </>
    )
}

export default SuperDoubleRange
