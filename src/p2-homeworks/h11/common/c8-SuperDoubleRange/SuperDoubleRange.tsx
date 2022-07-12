import React from 'react'
import {Box, Slider} from "@mui/material";
type SuperDoubleRangePropsType = {
    onChangeRange: (value: number[]) => void
    value: number[]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
          onChangeRange,value
    }
) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange(newValue as number[]);
    };
    return (
        <>
            <Box sx={{ width: 300, display: "inline-flex", marginLeft: 2}}
            ><div>{value[0]}</div>
                <Slider
                    size={"small"}
                value={value}
                onChange={handleChange}
            />
                <div style={{marginLeft: 45}}>{value[1]}</div>
            </Box>
        </>
    )
}

export default SuperDoubleRange
