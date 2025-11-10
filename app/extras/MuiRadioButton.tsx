'use client'
import { Box , FormControl, FormControlLabel, FormLabel, RadioGroup, Radio} from "@mui/material"
import { useState } from "react"

const MuiRadioButton = () => {
    const [value, setValue] = useState('');
    console.log({value});
    const changevalue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target.value))
    }
  return (
    <Box>
        <FormControl>
            <FormLabel id="job-experience-group-label">
                Years of Experience
            </FormLabel>
            <RadioGroup aria-labelledby="job-experience-group-label" name= "jon-experience-group" value={value} onChange={changevalue}>
                <FormControlLabel control={<Radio/>} label="0-2" value="0-2"/>
                <FormControlLabel control={<Radio/>} label="3-5" value="3-5" />
                <FormControlLabel control={<Radio/>} label="6-10" value="6-10" />
                <FormControlLabel control={<Radio/>} label="10+" value="10+" />
            </RadioGroup>
        </FormControl>
    </Box>
  )
}

export default MuiRadioButton