import { Stack, Divider, Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Stack sx={{ paddingY: { xs: 3, sm: 4 } }}>
      <Stack 
        sx={{
          display: 'flex', 
          justifyContent: 'space-between', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          paddingX: { xs: 2, sm: 4, md: 6, lg: 9 },
          gap: { xs: 3, sm: 0 },
          alignItems: { xs: 'center', sm: 'flex-start' }
        }}
      >
        <Stack 
          sx={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            gap: 2
          }}
        >
          <img 
            src={'./images/logo.png'} 
            style={{ width: '40px', height: 'auto' }} 
            alt="Yorfy Logo"
          />
          <Typography 
            variant="h5" 
            sx={{ 
              fontFamily:'poppins',
              fontWeight: 'bold',
              fontSize: { xs: '1.25rem', sm: '1.5rem' }
            }}
          >
            YORFY
          </Typography>
        </Stack>
        
        <Stack 
          direction="row" 
          spacing={2} 
          marginBottom={{ xs: 0, sm: 2 }}
          sx={{
            justifyContent: { xs: 'center', sm: 'flex-end' }
          }}
        >
          {["fb", "tw", "ig", "in"].map((text, index) => (
            <Box
              key={index}
              sx={{
                height: { xs: 35, sm: 40 },
                width: { xs: 35, sm: 40 },
                border: "1px solid white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: "10px", sm: "12px" },
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "scale(1.1)"
                }
              }}
            >
              {text}
            </Box>
          ))}
        </Stack>
      </Stack>
      
      <Divider 
        sx={{
          borderColor: 'blue', 
          borderWidth: 1, 
          mx: { xs: 2, sm: 4, md: 6, lg: 9 },
          my: { xs: 2, sm: 3 }
        }} 
      />
      
      <Stack 
        sx={{
          display: 'flex', 
          justifyContent: 'space-between', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          paddingX: { xs: 2, sm: 4, md: 6, lg: 9 }, 
          my: 2,
          gap: { xs: 2, sm: 0 },
          alignItems: { xs: 'center', sm: 'flex-start' },
          textAlign: { xs: 'center', sm: 'left' }
        }}
      >
        <Typography 
          variant="body1"
          sx={{
            fontFamily:'poppins',
            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
          }}
        >
          © 2022 Yorfy Template • All Rights Reserved
        </Typography>
        <Typography 
          variant="body1"
          sx={{
            fontFamily:'poppins',
            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
          }}
        >
          Made With Love by Areeba Studio
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Footer