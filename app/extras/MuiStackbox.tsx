import { Box, Stack, Divider, Paper} from "@mui/material"
import Grid from '@mui/material/Grid';

const MuiStackbox = () => {
  return (
    <Paper elevation={4} sx={{padding: '30px'}}>
    {/* <Stack
    direction={'row'}
    spacing={2}
    divider={<Divider orientation='vertical' flexItem />}
    >
        <Box
        sx={{
            border: '1px dashed black',
            backgroundColor: 'success.main',
            color: 'white',
            height: '100px',
            width: '100px',
            '&:hover': {
                backgroundColor: 'success.light',
            }
            }} >
            Hello
        </Box>
        <Box
        sx={{
            border : '1px solid',
            backgroundColor: 'secondary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            '&:hover': {
                backgroundColor: 'secondary.light',
            }
            }} >
            Hello
        </Box>
        <Box
        sx={{
            border : '1px solid',
            borderRadius: 1,
            backgroundColor: 'error.main',
            color: 'white',
            height: '100px',
            width: '100px',
            '&:hover': {
                backgroundColor: 'error.light',
            }
            }} >
            Hello
        </Box>
    </Stack> */}
    <Grid container spacing={2}>
        <Grid size={3}>
            <Box bgcolor="secondary.light" p={2} sx={{borderRadius: 2}}>Item 1</Box>
        </Grid >
        <Grid size={9}>
            <Box bgcolor="secondary.light" p={2} sx={{borderRadius: 2}}>Item 2</Box>
        </Grid>
        <Grid size={9} >
            <Box bgcolor="secondary.light" p={2} sx={{borderRadius: 2}}>Item 3</Box>
        </Grid>
        <Grid size={3} >
            <Box bgcolor="secondary.light" p={2} sx={{borderRadius: 2}}>Item 4</Box>
        </Grid>
    </Grid>

    </Paper>
  )
}

export default MuiStackbox