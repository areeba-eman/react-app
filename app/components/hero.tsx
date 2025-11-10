import { Stack, Box, Typography, Divider, Button } from "@mui/material";

const Hero = () => {
  return (
    <Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ 
          py: { xs: 2, sm: 3, md: 4 }, 
          mt: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        {/* Left Section */}
        <Box sx={{ 
          flex: 1, 
          pl: { xs: 0, sm: 2, md: 4, lg: 6 },
          mb: { xs: 4, md: 0 },
          textAlign: { xs: 'center', md: 'left' }
        }}>
          <Typography 
            color="primary"
            sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
          >
            Welcome to Yorfy
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: "bold", 
              my: 2,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' }
            }}
          >
            Now Available, Meet Yorfy NFT Collection ⭐️
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem' },
              px: { xs: 1, md: 0 }
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolores suscipit fuga qui sunt soluta quam magni cupiditate corporis, doloremque fac.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 2 }}
            divider={
              <Divider 
                orientation="vertical" 
                flexItem 
                sx={{ 
                  borderColor: "white",
                  display: { xs: 'none', sm: 'block' }
                }} 
              />
            }
            sx={{ 
              mt: 3,
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}
          >
            <Box textAlign="center">
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: "bold",
                  fontSize: { xs: '1.1rem', sm: '1.25rem' }
                }}
              >
                546
              </Typography>
              <Typography 
                variant="body2"
                sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
              >
                NFT Items
              </Typography>
            </Box>
            <Box textAlign="center">
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: "bold",
                  fontSize: { xs: '1.1rem', sm: '1.25rem' }
                }}
              >
                42
              </Typography>
              <Typography 
                variant="body2"
                sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
              >
                Owners
              </Typography>
            </Box>
            <Box textAlign="center">
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: "bold",
                  fontSize: { xs: '1.1rem', sm: '1.25rem' }
                }}
              >
                376
              </Typography>
              <Typography 
                variant="body2"
                sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
              >
                Items Sold
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            width: { xs: '100%', md: 'auto' },
            maxWidth: { xs: '400px', md: 'none' }
          }}
        >
          <Box
            sx={{
              position: { xs: 'relative', sm: 'absolute' },
              bottom: { xs: 0, sm: "-60px", md: "-80px" },
              mt: { xs: 2, sm: 0 },
              width: { xs: '90%', sm: '350px', md: '400px' },
              height: { xs: 'auto', sm: '150px', md: '180px' },
              bgcolor: "rgba(255, 255, 255, 0.2)",
              zIndex: { xs: 1, sm: 0 },
              display: "flex",
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: "center",
              alignItems: { xs: 'center', sm: 'flex-end' },
              borderRadius: "9px",
              pb: { xs: 2, sm: 2 },
              pt: { xs: 2, sm: 0 },
              px: { xs: 2, sm: 0 },
              boxShadow: 3,
              gap: { xs: 1.5, sm: 0 }
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ 
                zIndex: 2,
                width: { xs: '100%', sm: 'auto' },
                fontSize: { xs: '0.85rem', sm: '0.875rem' },
                py: { xs: 1, sm: 0.75 }
              }}
            >
              Buy on OpenSea
            </Button>
            <Button
              variant="outlined"
              sx={{
                ml: { xs: 0, sm: 2 },
                color: "white",
                borderColor: "white",
                zIndex: 2,
                width: { xs: '100%', sm: 'auto' },
                fontSize: { xs: '0.85rem', sm: '0.875rem' },
                py: { xs: 1, sm: 0.75 }
              }}
            >
              Know More
            </Button>
          </Box>

          {/* Image */}
          <img
            src="./images/heroimg.png"
            alt="hero"
            style={{
              width: "100%",
              maxWidth: "350px",
              height: "auto",
              borderRadius: "12px",
              position: "relative",
              zIndex: 1,
            }}
          />
        </Box>
      </Stack>

      {/* Discount Banner */}
      <Box 
        sx={{
          width: "100%", 
          height: { xs: "auto", sm: "70px", md: "90px" },
          marginTop: { xs: '80px', sm: '120px', md: '150px' }, 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'center', sm: 'space-between' },
          alignItems: 'center', 
          backgroundColor: '#AA00FF', 
          color: 'white',
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 2, sm: 0 },
          gap: { xs: 1, sm: 2 },
          overflow: 'hidden'
        }}
      >
        <Typography 
          variant="h4"
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2.125rem' },
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
            fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2.125rem' },
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
    </Stack>
  );
};

export default Hero;