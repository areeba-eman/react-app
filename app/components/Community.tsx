"use client";

import { Box, Button, Typography, Avatar, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

interface UserCardData {
  name: string;
  status: string;
  avatarUrl?: string;
  top: number;
  left: number;
  zIndex: number;
}

interface UserCardProps {
  data: UserCardData;
  index: number;
}

function UserCard({ data, index }: UserCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: { xs: 1.5, sm: 1.5 },
        gap: { xs: 1, sm: 1.5 },
        position: { xs: 'relative', md: 'absolute' },
        width: { xs: '100%', sm: '90%', md: 424 },
        maxWidth: { xs: '400px', md: 'none' },
        height: { xs: 'auto', md: 88 },
        minHeight: { xs: 80, md: 88 },
        left: { 
          xs: 0,
          md: `${data.left}px`
        },
        top: { 
          xs: 0,
          md: `${data.top}px`
        },
        mb: { xs: 2, md: 0 },
        mx: { xs: 'auto', md: 0 },
        background: "#081956",
        borderRadius: 2,
        boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.5)",
        zIndex: { xs: 1, md: data.zIndex },
      }}
    >
      {/* Avatar */}
      <Avatar
        src={data.avatarUrl}
        sx={{
          width: { xs: 48, sm: 56 },
          height: { xs: 48, sm: 56 },
          bgcolor: "#D9D9D9",
          flexShrink: 0,
        }}
      />

      {/* Name & Status */}
      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: 14, sm: 16 },
            color: "white",
            fontFamily:'poppins',
            lineHeight: { xs: '24px', sm: '32px' },
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {data.name}
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: 11, sm: 12 }, 
            color: "#ccc",
            whiteSpace: 'nowrap',
            fontFamily:'poppins',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {data.status}
        </Typography>
      </Box>

      {/* Icon */}
      <IconButton 
        sx={{ 
          color: "white",
          flexShrink: 0,
          p: { xs: 0.5, sm: 1 }
        }}
      >
        <MoreHorizIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
      </IconButton>
    </Box>
  );
}

export default function Collections() {
  const userCards: UserCardData[] = [
    {
      name: "John Doe",
      status: "Last Online 2 Hours Ago",
      top: 0,
      left: 0,
      zIndex: 3,
    },
    {
      name: "Jane Smith",
      status: "Active Now",
      top: 104,
      left: 40,
      zIndex: 2,
    },
    {
      name: "Alex Lee",
      status: "Offline 5 Hours Ago",
      top: 208,
      left: 80,
      zIndex: 1,
    },
  ];

  return (
    <Box 
      marginTop={{ xs: 4, sm: 5, md: 6 }}
      
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1216px",
          minHeight: { xs: 'auto', md: '344px' },
          display: "flex",
          flexDirection: { xs: 'column', md: 'row' },
          // justifyContent: { md: "space-between" },
          gap: { xs: 4, md: 10 },
          pl: { xs: 4, md: 9 },
        }}
      >
        {/* Left Section */}
        <Box 
          sx={{ 
            width: { xs: '100%', md: '50%', lg: '656px' },
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography 
            sx={{ 
              color: "#5699FF", 
              fontFamily:'poppins',
              fontWeight: 700, 
              fontSize: { xs: 14, sm: 16 }
            }}
          >
            Community
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: 28, sm: 36, md: 44, lg: 56 },
              lineHeight: { xs: '36px', sm: '48px', md: '60px', lg: '72px' },
              color: "white",
              fontFamily:'poppins',
              mt: 1,
            }}
          >
            Join Our Community and Get Many Benefits
          </Typography>
          <Typography 
            sx={{ 
              color: "#ccc", 
              mt: 2, 
              fontFamily:'poppins',
              lineHeight: { xs: '24px', sm: '28px' },
              fontSize: { xs: '0.9rem', sm: '1rem' },
              pr: { md: 2 }
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: { xs: 3, sm: 4 },
              background: "#1E50FF",
              textTransform: "none",
              fontSize: { xs: 14, sm: 16 },
              fontWeight: 600,
              px: { xs: 4, sm: 5 },
              py: { xs: 1.2, sm: 1.5 },
              width: { xs: '100%', sm: 'auto' },
              "&:hover": { background: "#1640CC" },
            }}
          >
            Join Our Discord
          </Button>
        </Box>

        {/* Right Section - User Cards */}
        <Box 
  sx={{ 
    position: "relative", 
    width: { xs: '100%', md: '45%', lg: 504 },
    height: { xs: 'auto', md: 296 },
    display: 'flex',
    flexDirection: { xs: 'column', md: 'block' },
    alignItems: { xs: 'center', md: 'flex-start' },
    paddingLeft: { xs: 0, md: 10, lg: 20 },
    pt: { xs: 2, md: 2 },
    pl:8
  }}
>
  {userCards.map((user, index) => (
    <Box
      key={index}
      sx={{
        opacity: index === 0 ? 1 : 0.6,  // 👈 decrease opacity for 2nd & 3rd cards
        transition: 'opacity 0.3s ease',
        '&:hover': { opacity: 1 }        // 👈 optional: brighten on hover
      }}
    >
      <UserCard data={user} index={index} />
    </Box>
  ))}
</Box>


      </Box>

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
          px: { xs: 2, sm: 3, md: 9 },
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
    </Box>
  );
}