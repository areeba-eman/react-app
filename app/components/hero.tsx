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
        position: "relative",
        flex: 1,
        pl: { xs: 0, sm: 2, md: 4, lg: 6 },
        mb: { xs: 4, md: 0 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* 👇 Blur Background Layer */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "5%", md: "-10%" },
          left: { xs: "10%", md: "-15%" },
          transform: { xs: "translateX(-50%)", md: "none" },
          width: { xs: "220px", sm: "300px", md: "380px" },
          height: { xs: "220px", sm: "300px", md: "380px" },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,80,255,0.8) 0%, rgba(30,80,255,0.8) 80%)",
          filter: "blur(100px)",
          mixBlendMode: "screen",
          opacity: 0.8,
          zIndex: 1,
        }}
      />


      {/* 👇 Your text content (kept above blur) */}
      <Typography
        color="primary"
        fontWeight={"bold"}
        sx={{
          fontFamily: "Poppins",
          fontSize: { xs: "1rem", sm: "1rem" },
          position: "relative",
          zIndex: 2,
        }}
      >
        Welcome to Yorfy
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          my: 2,
          fontFamily: "Poppins",
          fontSize: {
            xs: "1.75rem",
            sm: "2.25rem",
            md: "2.75rem",
            lg: "4.2rem",
          },
          position: "relative",
          zIndex: 2,
        }}
        >
          Now Available, Meet Yorfy NFT Collection ⭐️
        </Typography>

        <Typography
          variant="body2"
          fontFamily={"Poppins"}
          sx={{
            fontSize: { xs: "0.7rem", sm: "0.9rem" },
            px: { xs: 1, md: 0 },
            position: "relative",
            zIndex: 2,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolores
          suscipit fuga qui sunt soluta quam magni cupiditate corporis, doloremque
          fac.
        </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 5 }}
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
              justifyContent: { xs: 'center', md: 'flex-start' , zIndex:2 }
            }}
          >
            <Box textAlign="center">
              <Typography 
                variant="h6" 
                sx={{ zIndex: 2,
                  fontWeight: "bold", fontFamily:'poppins',
                  fontSize: { xs: '1.5rem', sm: '2rem' }
                }}
              >
                546
              </Typography>
              <Typography 
                variant="body2"
                sx={{zIndex: 2,fontFamily:'poppins', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}
              >
                NFT Items
              </Typography>
            </Box>
            <Box textAlign="center">
              <Typography 
                variant="h6" 
                sx={{ zIndex: 2,
                  fontWeight: "bold",fontFamily:'poppins',
                  fontSize: {xs: '1.5rem', sm: '2rem'  }
                }}
              >
                42
              </Typography>
              <Typography 
                variant="body2"
                sx={{zIndex: 2,fontFamily:'poppins', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}
              >
                Owners
              </Typography>
            </Box>
            <Box textAlign="center">
              <Typography 
                variant="h6" 
                sx={{ 
                  fontFamily:'poppins',zIndex: 2,
                  fontWeight: "bold",
                  fontSize: {xs: '1.5rem', sm: '2rem' }
                }}
              >
                376
              </Typography>
              <Typography 
                variant="body2"
                sx={{zIndex: 2,fontFamily:'poppins', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}
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
          {/* 👇 Blur Background Layer */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "5%", md: "-10%" },
          left: { xs: "10%", md: "-15%" },
          transform: { xs: "translateX(-50%)", md: "none" },
          width: { xs: "220px", sm: "300px", md: "380px" },
          height: { xs: "220px", sm: "300px", md: "380px" },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(170, 0, 255, 1) 0%, rgba(170, 0, 255, 1) 80%)",
          filter: "blur(100px)",
          mixBlendMode: "screen",
          opacity: 0.8,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "0%", md: "-30%" },
          right: { xs: "0%", md: "-25%" },
          transform: { xs: "translateX(-50%)", md: "none" },
          width: { xs: "220px", sm: "300px", md: "380px" },
          height: { xs: "220px", sm: "300px", md: "380px" },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,80,255,0.8) 0%, rgba(30,80,255,0.8) 80%)",
          filter: "blur(100px)",
          mixBlendMode: "screen",
          opacity: 0.8,
          zIndex: 1,
        }}
      />

      
          <Box
            sx={{
              position: { xs:'absolute'},
              bottom: { xs:'-140px', sm: "-100px", md: "-80px" },
              mt: { xs: 2, sm: 0 },
              mb:{xs: 2, sm: 2 },
              width: { xs: '90%', sm: '400px', md: '400px' },
              height: { xs: 'auto', sm: '150px', md: '180px' },
              bgcolor: "rgba(255, 255, 255, 0.1)",
              zIndex: { xs: 2, sm: 2 },
              display: "flex",
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: "center",
              alignItems: { xs: 'center', sm: 'flex-end' },
              borderRadius: "9px",
              border:"2px solid blue",
              pb: { xs: 2, sm: 2 },
              pt: { xs: 2, sm: 0 },
              px: { xs: 2, sm: 0 },
              boxShadow: 3,
              gap: { xs: 1.5, sm: 0 },
              
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ 
                fontFamily:'poppins',
                zIndex: 2,
                width: { xs: '80%', sm: 'auto' },
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
                width: { xs: '80%', sm: 'auto' },
                fontSize: { xs: '0.85rem', sm: '0.875rem' },
                py: { xs: 1, sm: 0.75 },
                fontFamily:'poppins',
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
              zIndex: 3,
            }}
          />
        </Box>
      </Stack>

    </Stack>
  );
};

export default Hero;