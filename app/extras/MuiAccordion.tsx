import { Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState }  from "react";

const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const handlechange = (isexpanded: boolean, panel: string) => {
        setExpanded(isexpanded? panel : false);
    }
  return (
    <div>
        <Accordion 
        expanded={expanded === 'panel1'}
        onChange={(event, isexpanded) => handlechange(isexpanded, 'panel1')}>
            <AccordionSummary 
            aria-label="panel1-content"
            id="panel1-header"
            expandIcon={<ExpandMoreIcon />}>
                <Typography> This is Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails> 
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, optio nesciunt!
                    Aspernatur quaerat rem tempora quisquam atque nemo iusto dicta modi labore 
                    velit perspiciatis aliquam perferendis, iure similique quis? Neque.
                    
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion 
        expanded={expanded === 'panel2'}
        onChange={(event, isexpanded) => handlechange(isexpanded, 'panel2')}>
            <AccordionSummary 
            aria-label="panel2-content"
            id="panel2-header"
            expandIcon={<ExpandMoreIcon />}>
                <Typography> This is Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails> 
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, optio nesciunt!
                    Aspernatur quaerat rem tempora quisquam atque nemo iusto dicta modi labore 
                    velit perspiciatis aliquam perferendis, iure similique quis? Neque.
                    
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion 
        expanded={expanded === 'panel3'}
        onChange={(event, isexpanded) => handlechange(isexpanded, 'panel3')}>
            <AccordionSummary 
            aria-label="panel3-content"
            id="panel3-header"
            expandIcon={<ExpandMoreIcon />}>
                <Typography> This is Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails> 
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, optio nesciunt!
                    Aspernatur quaerat rem tempora quisquam atque nemo iusto dicta modi labore 
                    velit perspiciatis aliquam perferendis, iure similique quis? Neque.
                    
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MuiAccordion