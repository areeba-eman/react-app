import { Stack, Box, Typography, Button, TextField } from "@mui/material"

const Collaboration = () => {
  return (
    <Box sx={{ mb: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
      {/* Header Section */}
      <Stack 
        marginTop={{ xs: 4, sm: 6, md: 8 }} 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign: 'center', 
          gap: { xs: 1.5, sm: 2 }
        }}
      >
        <Typography 
          variant="body1" 
          color="primary" 
          sx={{
            fontWeight: 'Bold',
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          Collaboration
        </Typography>
        <Typography 
          variant="h3" 
          sx={{
            fontWeight: 'Bold',
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Our Partners
        </Typography>
      </Stack>

      {/* Logo Section */}
      <Stack 
        sx={{
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: { xs: 'center', sm: 'space-between' }, 
          alignItems: 'center',
          gap: { xs: 3, sm: 4, md: 2 },
          marginX: { xs: 0, sm: '20px', md: '40px', lg: '70px' }, 
          marginY: { xs: '30px', sm: '35px', md: '40px' },
          flexWrap: { sm: 'wrap', md: 'nowrap' }
        }}
      >
        <Box
          component="img"
          src={'./images/logo2.png'}
          alt="Partner logo 1"
          sx={{
            maxWidth: { xs: '120px', sm: '140px', md: '160px' },
            height: 'auto',
            objectFit: 'contain'
          }}
        />
        <Box
          component="img"
          src={'./images/logo3.png'}
          alt="Partner logo 2"
          sx={{
            maxWidth: { xs: '120px', sm: '140px', md: '160px' },
            height: 'auto',
            objectFit: 'contain'
          }}
        />
        <Box
          component="img"
          src={'./images/logo4.png'}
          alt="Partner logo 3"
          sx={{
            maxWidth: { xs: '120px', sm: '140px', md: '160px' },
            height: 'auto',
            objectFit: 'contain'
          }}
        />
        <Box
          component="img"
          src={'./images/logo5.png'}
          alt="Partner logo 4"
          sx={{
            maxWidth: { xs: '120px', sm: '140px', md: '160px' },
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </Stack>

      {/* Newsletter Section */}
      <Box 
        sx={{
          marginX: { xs: 0, sm: '20px', md: '40px', lg: '70px' }, 
          paddingY: { xs: '30px', sm: '40px', md: '50px' },
          paddingX: { xs: 2, sm: 3, md: 4 },
          bgcolor: '#081956', 
          minHeight: { xs: 'auto', md: '400px' },
          height: { xs: 'auto', md: '400px' },
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Stack 
          sx={{
            justifyContent: 'center', 
            alignItems: 'center', 
            textAlign: 'center', 
            gap: { xs: 1.5, sm: 2 },
            width: '100%'
          }}
        >
          <Typography 
            variant="body1" 
            color="primary" 
            sx={{
              fontWeight: 'Bold',
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
          >
            Newsletter
          </Typography>
          <Typography 
            variant="h3" 
            sx={{
              fontWeight: 'Bold',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
              px: { xs: 1, sm: 2 }
            }}
          >
            You Do Not Want to Miss Out on this!
          </Typography>
          <Typography 
            variant="body2"
            sx={{
              fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
              px: { xs: 1, sm: 2, md: 3 },
              maxWidth: '800px'
            }}
          >
            Explore the most engaging articles, videos, and tutorials that are making waves this week. Stay updated with the latest trends and insights curated just for you.
          </Typography>
          
          {/* Email Input Section */}
          <Box 
            sx={{
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center', 
              gap: 2, 
              marginTop: { xs: 3, sm: 4, md: 6 },
              width: { xs: '100%', sm: 'auto' },
              maxWidth: { xs: '400px', sm: 'none' }
            }}
          >
            <TextField
              label="Your Email"
              variant="outlined"
              sx={{
                width: { xs: '100%', sm: 350, md: 400 },
                borderRadius: '10px',
                '& .MuiOutlinedInput-root': { 
                  height: { xs: 44, sm: 40 },
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                },
                '& .MuiOutlinedInput-notchedOutline': { 
                  borderColor: 'white' 
                },
                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.8)'
                },
                '& .MuiInputLabel-root': { 
                  color: 'white',
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                },
                '& .MuiInputBase-input': { 
                  color: 'white',
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                },
              }}
            />
            <Button 
              variant="contained"
              sx={{
                height: { xs: 44, sm: 40 },
                px: { xs: 4, sm: 3 },
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                width: { xs: '100%', sm: 'auto' },
                whiteSpace: 'nowrap'
              }}
            >
              Submit
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Collaboration