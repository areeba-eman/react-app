'use client'
import { Stack ,Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import { useState } from "react";

const MuiButton = () => {
    const [formats, setformats] = useState<string | null>(null)   //useState<string[]>([]) for multiple selection
    console.log(formats);
    function handleformatchange(_event:React.MouseEvent<HTMLElement>, updateFormats: string | null) {   //for multiple selection use updateFormats: string[]
        setformats(updateFormats);
    }
  return (
    <div>
    <Stack spacing={4}>    
        <Stack direction={"row"} spacing={2}>
            <Button variant="text" href="https://google.com">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack direction={"row"} spacing={2}>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="outlined" color="error">Error</Button>
            <Button variant="contained" color="warning">Warning</Button>
            <Button variant="text" color="info">Info</Button>
            <Button variant="contained" color="success">Success</Button>
        </Stack>
        <Stack display={'block'} direction={"row"} spacing={2}>
            <Button variant="contained" size="small">Small</Button>
            <Button variant="contained" size="medium">Medium</Button>
            <Button variant="contained" size="large">Large</Button>
        </Stack>
        <Stack direction={"row"} spacing={2}>
            <Button variant="contained" color="warning" startIcon={<SendIcon />} disableRipple onClick={() => alert('Hello')} >Send</Button>
            <Button variant="contained" color="success" endIcon={<SendIcon />} disableElevation>Send</Button>
            <IconButton aria-label="Sendingg" color="error">
                <SendIcon />
            </IconButton>
        </Stack>
        <Stack direction={"row"}>
            <ButtonGroup 
            variant="contained" 
            orientation="vertical" 
            color="secondary"
            aria-label="Alignment button group">
                <Button onClick={() => alert('Left Clicked')}>Left</Button>
                <Button onClick={() => alert('Middle Clicked')}>center</Button>
                <Button onClick={() => alert('Right Clicked')}>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction={"row"}>
            <ToggleButtonGroup
             aria-label="format buttons" 
             value={formats} 
             onChange={handleformatchange}
             exclusive  //for single selection
             >
                <ToggleButton value={'bold'} aria-label="bold"><FormatBoldIcon /></ToggleButton>
                <ToggleButton value={'italic'} aria-label="italic"><FormatItalicIcon /></ToggleButton>
                <ToggleButton value={'underline'} aria-lable="underline"><FormatUnderlinedIcon /></ToggleButton>
            </ToggleButtonGroup>
        </Stack>

    </Stack>   
    </div>
  )
}

export default MuiButton