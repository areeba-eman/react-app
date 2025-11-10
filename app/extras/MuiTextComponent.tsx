'use client'
import { Stack, TextField, InputAdornment} from "@mui/material"

const MuiTextComponent = () => {
  return (
    <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
            <TextField label="Name" variant="outlined"/>
            <TextField label="Name" variant="filled" color="secondary"/>
            <TextField label="Name" variant="standard"/>

        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField label="Small Secondary" size="small" color="secondary" />
        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField label="Name" size="small" color="error" required />
            <TextField label="Email" size="small" color="info" inputProps={{readOnly : true}} />
            <TextField 
            label="Password" size="small" color="warning" type="password" required
             helperText="Do not share your password with anyone" />
        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField label="Amount" 
            InputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}/>
            <TextField label="Weight" color="secondary"
            InputProps={{
                endAdornment : <InputAdornment position='end'>kg</InputAdornment>
            }}/>
        </Stack>

    </Stack>
  )
}

export default MuiTextComponent