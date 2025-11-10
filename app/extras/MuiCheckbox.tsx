'use client'
import { Box ,FormControlLabel, Checkbox, FormControl, FormGroup, FormLabel} from "@mui/material"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from "react"
import { Check } from "@mui/icons-material";

const MuiCheckbox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false);
    const [skills, setskills] = useState<string[]>([]);
    // console.log({acceptTnC});
    console.log({skills});
    const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }
    const handleskillchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1){
            setskills([...skills, event.target.value]);
        }else{
            setskills(skills.filter((skill)=> skill !== event.target.value))
        }
        
    }
  return (
    <Box>
        <Box>
            <FormControlLabel control={<Checkbox checked={acceptTnC} onChange={handlechange} />}
             label="I Accept Terms and conditions" />
        </Box>
        <Box>
            <Checkbox 
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon/>}
            value={acceptTnC}
            onChange={handlechange}/>
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                   <FormControlLabel value={'HTML'} control={<Checkbox checked={skills.includes('HTML')} onChange={handleskillchange} />}
                        label="HTML" />

                   <FormControlLabel value={'CSS'} control={<Checkbox checked={skills.includes('CSS')} onChange={handleskillchange} />}
                        label="CSS " />

                   <FormControlLabel value={'JS'} control={<Checkbox checked={skills.includes('JS')} onChange={handleskillchange} />}
                        label="JavaScript" /> 
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckbox