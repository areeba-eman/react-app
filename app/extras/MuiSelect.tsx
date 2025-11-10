'use client'
import { Box, TextField , MenuItem} from "@mui/material"
import React, { useState } from "react"

const MuiSelect = () => {
    const countryList = [
       { value : 'IN', label : 'India'},
       { value : 'US', label : 'USA'}, 
       { value : 'UK', label : 'UK'},
       { value : 'FR', label : 'France'}, 
       { value : 'DE', label : 'Germany'},
    ]

    const [countries, setCountries] = useState<string[]>([]);
    console.log({countries});
    function handlechange(event: React.ChangeEvent<HTMLInputElement>){
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
  return (
    <Box width="250px">
        <TextField label="Select Country"
        color="secondary"
        fullWidth
        select
        value={countries} 
        onChange={handlechange} 
        SelectProps={{multiple : true}} >
           { countryList.map((country)=> (
                <MenuItem key = {country.value} value= {country.value}>
                    {country.label}
                </MenuItem>
            ))}
        </TextField>
    </Box>
  )
}

export default MuiSelect
// 'use client'
// import { Box, TextField , MenuItem} from "@mui/material"
// import React, { useState } from "react"

// const MuiSelect = () => {
//     const [countries, setCountries] = useState<string[]>([]);
//     console.log({countries});
//     function handlechange(event: React.ChangeEvent<HTMLInputElement>){
//         const value = event.target.value;
//         setCountries(typeof value === 'string' ? value.split(',') : value)
//     }
//   return (
//     <Box width="250px">
//         <TextField label="Select Country" fullWidth select value={countries} onChange={handlechange} SelectProps={{multiple : true}} >
//             <MenuItem value="IN">India</MenuItem>
//             <MenuItem value="US">USA</MenuItem>
//             <MenuItem value="UK">UK</MenuItem>
//             <MenuItem value="FR">France</MenuItem>
//             <MenuItem value="DE">Germany</MenuItem>
//         </TextField>
//     </Box>
//   )
// }

// export default MuiSelect