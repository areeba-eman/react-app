import { Box, Typography } from "@mui/material"

const DiscountBar = () => {
  return (
    <Box 
        sx={{
          width: "100%", 
          height: { xs: "auto", sm: "70px", md: "90px" },
          marginTop: { xs: '140px', sm: '120px', md: '150px' }, 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'center', sm: 'space-between' },
          alignItems: 'center', 
          backgroundColor: '#AA00FF', 
          color: 'white',
          px: { xs: 2, sm: 7, md: 9, xl:35 },
          py: { xs: 2, sm: 0 },
          gap: { xs: 1, sm: 2 },
          overflow: 'hidden'
        }}
      >
        <Typography 
          variant="h4"
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2.2rem' },
            fontWeight: 'bold',
            fontFamily:'poppins',
            display: { xs: 'none', sm: 'block' }
          }}
        >
          Discount Sale
        </Typography>
        <Typography 
          variant="h4" 
          sx={{
            color: "transparent",
            WebkitTextStroke: { xs: "0.5px white", md: "0.6px white" },
            fontWeight: "bold",
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' },
            textAlign: 'center'
          }}
        >
          UPTO 40% OFF
        </Typography>
        <Typography 
          variant="h4"
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2.2rem' },
            fontWeight:'bold',
            fontFamily:'poppins',
            display: { xs: 'none', md: 'block' }
          }}
        >
          Discount Sale
        </Typography>
        <Typography 
          variant="h4" 
          sx={{
            color: "transparent",
            WebkitTextStroke: { xs: "0.5px white", md: "0.6px white" },
            fontWeight: "bold",
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' },
            display: { xs: 'none', lg: 'block' },
            textAlign: 'center'
          }}
        >
          UPTO 40% OFF
        </Typography>
      </Box>
  )
}

export default DiscountBar