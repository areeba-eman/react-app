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
        width: { xs: '100%', sm: '100%', md: '80%' },
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
        mx: { xs: 'auto', md: 2 },
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
          gap: { xs: 2, md:1, lg:10 },
          pl: { xs: 2, md: 1, lg:9 },
          pr:{xs:2, sm:1}
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
            color="primary"
            sx={{ 
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
              background: "primary",
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
    width: { xs: '100%', md: '50%', lg: 504 },
    height: { xs: 'auto', md: 296 },
    display: 'flex',
    flexDirection: { xs: 'column' },
    alignItems: { xs: 'center', md: 'flex-start' },
    px: { xs: 0, md: 2 },   
    pt: { xs: 2, md: 2 },
  }}
>
  {userCards.map((user, index) => (
    <Box
      key={index}
      sx={{
        opacity: index === 0 ? 1 : 0.7,
        transition: 'opacity 0.3s ease',
        width: '100%', // ✅ Full width of the parent Box
        '&:hover': { opacity: 1 }
      }}
    >
      <UserCard data={user} index={index} />
    </Box>
  ))}
</Box>




      </Box>
    </Box>
  );
}