import { Stack, Box, Typography, Button } from "@mui/material"

const Collections = () => {
  return (
    <div className="mb-8">
      <Box sx={{
        maxWidth: "1440px",
        mx: "auto",
        position: "relative",
        overflow: "hidden",
      }}>

         {/* Glow circle behind cards */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "15%",
          transform: "translateX(-50%)",
          width: { xs: "300px", md: "500px" },
          height: { xs: "300px", md: "500px" },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,80,255,0.9) 0%, rgba(30,80,255,0.4) 50%)",
          filter: "blur(100px)",
          mixBlendMode: "screen",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "-30%",
          transform: "translateX(-50%)",
          width: { xs: "300px", md: "500px" },
          height: { xs: "300px", md: "500px" },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(170, 0, 255, 0.5) 0%,rgba(170, 0, 255, 0.5) 50%)",
          filter: "blur(100px)",
          mixBlendMode: "screen",
          zIndex: 0,
        }}
      />


        <Box
        sx={{ position: "relative", zIndex: 1 }}>
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
          Collection
        </Typography>
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 'Bold',
            fontFamily:'poppins',
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Yorfy NFT Collections
        </Typography>
        <Typography 
          variant="body2"
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem' },
            paddingX: { xs: 1, sm: 2 },
            lineHeight:2,
            fontFamily:'poppins'
          }}
        >
          Explore the most engaging articles, videos, and tutorials that are making waves this week. Stay updated with the <br /> latest trends and insights curated just for you.
        </Typography>
      </Stack>

      <Stack 
        marginTop={{ xs: 4, sm: 6, md: 8 }} 
        marginX={{ xs: 2, sm: 4, md: 8, lg: 14 }}
      >
        <Box 
          sx={{ 
            gap: { xs: 2, sm: 2 }, 
            padding:{xs:5, sm:5, md:1},
            flexDirection: { xs: 'column', sm: 'row' }, 
            display: 'flex', 
            justifyContent: 'space-between'
          }}
        >
          {/* NFT Card 1 */}
          <Box 
            sx={{
              display: 'flex',
              flex: { xs: '1 1 100%', md: 1 }, 
              flexDirection: 'column', 
              border: '1px solid blue', 
              borderRadius: '10px', 
              padding: { xs: '15px', md: '12px', lg: '16px' },
              maxWidth: { xs: '100%', md: '320px', lg: '380px' }
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: { xs: '350px', sm: '400px', md: '100%' },
                margin: '0 auto',
                paddingBottom: { xs: '85%', sm: '90%', md: '100%' },
                position: 'relative',
                marginBottom: { xs: 2, md: 1.5 }
              }}
            >
              <img 
                src={'./images/face2.png'} 
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  borderRadius: '8px' 
                }}
                alt="NFT Collection 1"
              />
            </Box>
            <Box 
              sx={{
                display: "flex", 
                flexDirection: 'row', 
                gap: { xs: 1.5, md: 1 }, 
                paddingY: { xs: 1, md: 0.5 }, 
                alignItems: 'center'
              }}
            >
              <img 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  objectFit: 'cover',
                  flexShrink: 0
                }}
                src={'./images/logo.png'}
                alt="Logo"
              />
              <Typography 
                variant="h6"
                sx={{ 
                  fontFamily:'poppins',
                  fontSize: { xs: '0.95rem', md: '0.9rem', lg: '1rem' },
                  fontWeight: 500
                }}
              >
                YorMorth #876
              </Typography>
            </Box>
          </Box>

          {/* NFT Card 2 */}
          <Box 
            sx={{
              display: 'flex',
              flex: { xs: '1 1 100%', md: 1 }, 
              flexDirection: 'column', 
              border: '1px solid blue', 
              borderRadius: '10px', 
              padding: { xs: '15px', md: '12px', lg: '16px' },
              maxWidth: { xs: '100%', md: '320px', lg: '380px' }
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: { xs: '350px', sm: '400px', md: '100%' },
                margin: '0 auto',
                paddingBottom: { xs: '85%', sm: '90%', md: '100%' },
                position: 'relative',
                marginBottom: { xs: 2, md: 1.5 }
              }}
            >
              <img 
                src={'./images/face3.png'} 
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  borderRadius: '8px' 
                }}
                alt="NFT Collection 2"
              />
            </Box>
            <Box 
              sx={{
                display: "flex", 
                flexDirection: 'row', 
                gap: { xs: 1.5, md: 1 }, 
                paddingY: { xs: 1, md: 0.5 }, 
                alignItems: 'center'
              }}
            >
              <img 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  objectFit: 'cover',
                  flexShrink: 0
                }}
                src={'./images/logo.png'}
                alt="Logo"
              />
              <Typography 
                variant="h6"
                sx={{ 
                  fontFamily:'poppins',
                  fontSize: { xs: '0.95rem', md: '0.9rem', lg: '1rem' },
                  fontWeight: 500
                }}
              >
                YorMorth #876
              </Typography>
            </Box>
          </Box>

          {/* NFT Card 3 */}
          <Box 
            sx={{
              display: 'flex',
              flex: { xs: '1 1 100%', md: 1 }, 
              flexDirection: 'column', 
              border: '1px solid blue', 
              borderRadius: '10px', 
              padding: { xs: '15px', md: '12px', lg: '16px' },
              maxWidth: { xs: '100%', md: '320px', lg: '380px' }
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: { xs: '350px', sm: '400px', md: '100%' },
                margin: '0 auto',
                paddingBottom: { xs: '85%', sm: '90%', md: '100%' },
                position: 'relative',
                marginBottom: { xs: 2, md: 1.5 }
              }}
            >
              <img 
                src={'./images/face4.png'} 
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  borderRadius: '8px' 
                }}
                alt="NFT Collection 3"
              />
            </Box>
            <Box 
              sx={{
                display: "flex", 
                flexDirection: 'row', 
                gap: { xs: 1.5, md: 1 }, 
                paddingY: { xs: 1, md: 0.5 }, 
                alignItems: 'center'
              }}
            >
              <img 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  objectFit: 'cover',
                  flexShrink: 0
                }}
                src={'./images/logo.png'}
                alt="Logo"
              />
              <Typography 
                variant="h6"
                sx={{ 
                  fontFamily:'poppins',
                  fontSize: { xs: '0.95rem', md: '0.9rem', lg: '1rem' },
                  fontWeight: 500
                }}
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
            border: '1.5px solid white',
            width: { xs: '100%', sm: 'auto' },
            maxWidth: { xs: '300px', sm: 'none' },
            borderRadius: '10px',
            mb:10
          }}
        >
          View on OpenSea
        </Button>
      </Box>

      </Box>


      </Box>
    </div>
  )
}

export default Collections