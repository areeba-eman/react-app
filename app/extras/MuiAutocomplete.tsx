// import React from 'react'
// import { Stack, Autocomplete, TextField} from '@mui/material'
// import { useState } from 'react'

// type skill = {
//     id:number;
//     skill: string;
// }

// const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'NextJS']
// const skilloptions = skills.map((skill, index) => ({
//     id: index + 1,
//         label: skill
//     }
// ))
// const MuiAutocomplete = () => {
//     const [value, setValue] = useState<string | null>(null);
//     const [skill , setskill] = useState<skill | null>(null);
//     console.log({skill})
//   return (
//     <Stack spacing={2} width='250px'>
//         <Autocomplete 
//         options={skills} 
//         renderInput={(params) => <TextField {...params}  label="Skills"/>}
//         value={value}
//          onChange={(event:any, newValue : null | string) => setValue(newValue)}
//          freeSolo />
//          <Autocomplete 
//         options={skilloptions} 
//         renderInput={(params) => <TextField {...params}  label="Skills"/>}
//         value={skill}
//          onChange={(event:any, newValue : skill | null) => setskill(newValue)}
//           />
//     </Stack>
//   )
// }

// export default MuiAutocomplete