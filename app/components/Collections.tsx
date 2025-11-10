import { Stack, Box, Typography, Button } from "@mui/material"

const Collections = () => {
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
          sx={{ fontWeight: 'Bold' }}
        >
          Collections
        </Typography>
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 'Bold',
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Yorfy NFT Collections
        </Typography>
        <Typography 
          variant="body2"
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem' },
            paddingX: { xs: 1, sm: 2 }
          }}
        >
          Explore the most engaging articles, videos, and tutorials that are making waves this week. Stay updated with the latest trends and insights curated just for you.
        </Typography>
      </Stack>

      <Stack 
        marginTop={{ xs: 4, sm: 6, md: 8 }} 
        marginX={{ xs: 2, sm: 4, md: 8, lg: 14 }}
      >
        <Box 
          sx={{ 
            gap: 2, 
            flexDirection: { xs: 'column', md: 'row' }, 
            display: 'flex', 
            justifyContent: 'space-between'
          }}
        >
          <Box 
            sx={{
              display: 'flex',
              flex: 1, 
              flexDirection: 'column', 
              border: '1px solid blue', 
              borderRadius: '10px', 
              padding: { xs: '15px', sm: '20px' },
              minHeight: { xs: 'auto', md: '420px' }
            }}
          >
            <img 
              src={'./images/face2.png'} 
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
              alt="NFT Collection 1"
            />
            <Box 
              sx={{
                display: "flex", 
                flexDirection: 'row', 
                gap: 2, 
                paddingY: 2, 
                alignItems: 'center'
              }}
            >
              <img 
                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                src={'./images/logo.png'}
                alt="Logo"
              />
              <Typography 
                variant="h6"
                sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
              >
                YorMorth #876
              </Typography>
            </Box>
          </Box>

          <Box 
            sx={{
              display: 'flex',
              flex: 1, 
              flexDirection: 'column', 
              border: '1px solid blue', 
              borderRadius: '10px', 
              padding: { xs: '15px', sm: '20px' },
              minHeight: { xs: 'auto', md: '420px' }
            }}
          >
            <img 
              src={'./images/face3.png'} 
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
              alt="NFT Collection 2"
            />
            <Box 
              sx={{
                display: "flex", 
                flexDirection: 'row', 
                gap: 2, 
                paddingY: 2, 
                alignItems: 'center'
              }}
            >
              <img 
                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                src={'./images/logo.png'}
                alt="Logo"
              />
              <Typography 
                variant="h6"
                sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
              >
                YorMorth #876
              </Typography>
            </Box>
          </Box>

          <Box 
            sx={{
              display: 'flex',
              flex: 1, 
              flexDirection: 'column', 
              border: '1px solid blue', 
              borderRadius: '10px', 
              padding: { xs: '15px', sm: '20px' },
              minHeight: { xs: 'auto', md: '420px' }
            }}
          >
            <img 
              src={'./images/face4.png'} 
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
              alt="NFT Collection 3"
            />
            <Box 
              sx={{
                display: "flex", 
                flexDirection: 'row', 
                gap: 2, 
                paddingY: 2, 
                alignItems: 'center'
              }}
            >
              <img 
                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                src={'./images/logo.png'}
                alt="Logo"
              />
              <Typography 
                variant="h6"
                sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
              >
                YorMorth #876
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>

      <Box sx={{ display: 'flex', justifyContent: 'center', paddingX: { xs: 2, sm: 0 } }}>
        <Button 
          variant="outlined" 
          sx={{
            marginTop: 4, 
            paddingX: { xs: 4, sm: 6 }, 
            paddingY: 1.5, 
            fontWeight: 'Bold', 
            fontSize: { xs: '14px', sm: '16px' }, 
            color: 'white', 
            border: '2px solid white',
            width: { xs: '100%', sm: 'auto' },
            maxWidth: { xs: '300px', sm: 'none' }
          }}
        >
          View on OpenSea
        </Button>
      </Box>
    </div>
  )
}

export default Collections