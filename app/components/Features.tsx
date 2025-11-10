import { Stack, Box, Typography, Button } from "@mui/material"

const Features = () => {
  return (
    <div className="mb-8">
      <Stack 
        marginTop={{ xs: 4, sm: 6, md: 8 }} 
        sx={{
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign: 'center', 
          gap: 2,
          paddingX: { xs: 2, sm: 3, md: 0 }
        }}
      >
        <Typography 
          variant="body1" 
          color="primary"
          sx={{fontFamily:'poppins', fontWeight: 'Bold' }}
        >
          Featured
        </Typography>
        <Typography 
          variant="h3" 
          sx={{ 
            fontFamily:'poppins',
            fontWeight: 'Bold',
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.5rem' }
          }}
        >
          Hot Trending On This <br /> Week from Yorfy
        </Typography>
        <Typography 
          variant="body2"
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem' },
            paddingX: { xs: 1, sm: 2 },
            fontFamily:'poppins'
          }}
        >
          Explore the most engaging articles, videos, and tutorials that are making 
          waves this week. Stay updated <br /> with the latest trends and insights curated just for you.
        </Typography>
      </Stack>

      <Stack 
        marginTop={{ xs: 4, sm: 6, md: 8 }} 
        marginX={{ xs: 2, sm: 4, md: 8 }}
      >
        <Box 
          sx={{
            bgcolor: '#081956', 
            p: { xs: '20px', sm: '30px', md: '40px' },
            borderRadius: '10px',
            gap: { xs: 3, sm: 4, md: 5 }, 
            flexDirection: { xs: 'column', lg: 'row' }, 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: { xs: 'center', lg: 'stretch' },
            minHeight: { xs: 'auto', lg: '400px' }
          }}
        >
          <Box 
            sx={{
              display: 'flex',
              flex: { xs: 'none', lg: 1 }, 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: 2,
              textAlign: 'center',
              width: { xs: '100%', lg: 'auto' }
            }}
          >
            <img 
              style={{ width: '70px', height: 'auto', objectFit: 'cover' }}
              src={'./images/logo.png'}
              alt="YorEyes Logo"
            />
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'Bold',
                fontFamily:'poppins',
                fontSize: { xs: '1.25rem', sm: '1.5rem' , md:'2.8rem' }
              }}
            >
              YorEyes
            </Typography>
            <Typography 
              variant="h5" 
              sx={{
                fontFamily:'poppins',
                fontWeight: 'Bold',
                fontSize: { xs: '1.25rem', sm: '1.5rem', md:'2.5rem' }
              }}
            >
              #234
            </Typography>
            <Typography 
              variant="body1"
              sx={{
                fontFamily:'poppins',
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              Discover the mesmerizing YorEyes, a digital masterpiece that captures the essence of human emotion through intricate design and vibrant colors.
            </Typography>
          </Box>

          <Box 
            sx={{
              flex: { xs: 'none', lg: 1 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: { xs: '100%', lg: 'auto' },
              maxWidth: { xs: '300px', sm: '350px', md: '400px', lg: 'none' }
            }}
          >
            <img 
              style={{ 
                width: '100%', 
                maxWidth: '300px', 
                height: 'auto', 
                objectFit: 'cover' 
              }}
              src={'./images/face1.png'}
              alt="YorEyes NFT"
            />
          </Box>

          <Box 
            sx={{
              display: "flex",
              flex: { xs: 'none', lg: 1 }, 
              alignItems: 'center',
              textAlign: 'center', 
              gap: 2, 
              flexDirection: 'column',
              width: { xs: '100%', lg: 'auto' }
            }}
          >
            <Typography 
              variant="h5"
                sx={{ 
                  fontFamily:'poppins',
                fontWeight: 'Bold',
                fontSize: { xs: '1.25rem', sm: '1.5rem' , md:'2.8rem' }
              }}
            >
              Interesting <br /> with This <br /> Item?
            </Typography>
            <Typography 
              variant="body2"
              fontFamily='poppins'
              sx={{
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              Dive into the world of YorEyes and experience the fusion of art and technology. Don't miss out on owning something like this nfts
            </Typography>
            <Button 
              variant="contained"
              sx={{
                paddingX: { xs: 3, sm: 4 },
                paddingY: { xs: 1, sm: 1.5 },
                fontSize: { xs: '0.875rem', sm: '1rem' },
                width: { xs: '100%', sm: 'auto' },
                maxWidth: { xs: '280px', sm: 'none' },
                borderRadius:'8px'
              }}
            >
              Buy on OpenSea
            </Button>
          </Box>
        </Box>
      </Stack>
    </div>
  )
}

export default Features