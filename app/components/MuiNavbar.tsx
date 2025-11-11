import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem,
  Drawer,List,ListItem,ListItemButton,ListItemText,Box,useMediaQuery,useTheme,Collapse
} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const open = Boolean(anchorEl);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileSubmenu = () => {
    setMobileSubmenuOpen(!mobileSubmenuOpen);
  };

  // Desktop Navigation Items
  const navItems = [
    { label: 'Home', hasDropdown: true },
    { label: 'NFT', hasDropdown: false },
    { label: 'RoadMap', hasDropdown: false },
    { label: 'About Us', hasDropdown: false },
    { label: 'Contact Us', hasDropdown: false },
    { label: 'Pages', hasDropdown: true }
  ];

  // Mobile Drawer Content
  const drawer = (
    <Box 
      sx={{ 
        width: 280, 
        height: '100%', 
        backgroundColor: '#1a1a1a',
        color: 'white'
      }}
      role="presentation"
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        fontFamily:'poppins',
        p: 2,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Typography variant="h6" sx={{fontFamily:'poppins', fontWeight: 'bold' }}>
          YORFY
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List sx={{ pt: 2 }}>
        <ListItem disablePadding>
          <ListItemButton onClick={handleMobileSubmenu}>
            <ListItemText primary="Home" />
            {mobileSubmenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={mobileSubmenuOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Profile" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="My account" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </List>
        </Collapse>
        
        {['NFT', 'RoadMap', 'About Us', 'Contact Us'].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        
        <ListItem disablePadding>
          <ListItemButton onClick={handleMobileSubmenu}>
            <ListItemText primary="Pages" />
            {mobileSubmenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
      </List>

      <Box sx={{ p: 2, mt: 2 }}>
        <Button 
          variant="contained" 
          color="primary"
          fullWidth
          sx={{ py: 1.5 , fontFamily:'poppins',}}
        >
          Join Us
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar 
        elevation={0} 
        sx={{
          paddingX: { xs: 2, sm: 3, md: 4, lg: 5 }, 
          paddingY: { xs: 1, sm: 1.5, md: 2 }, 
          position: 'static', 
          backgroundColor: 'transparent'
        }}
      >
        <Toolbar 
          sx={{
            color: 'white',
            minHeight: { xs: 56, sm: 64, md: 70 },
            px: { xs: 0, sm: 1 }
          }}
        >
          {/* Logo */}
          <IconButton 
            size="large" 
            edge="start" 
            aria-label="logo"
            sx={{ 
              mr: { xs: 1, sm: 2 },
              p: { xs: 0.5, sm: 1 }
            }}
          >
            <img 
              src="./images/logo.png" 
              alt="logo" 
              style={{ 
                height: isMobile ? '32px' : isTablet ? '36px' : '40px',
                width: 'auto'
              }}
            />
          </IconButton>

          {/* Brand Name */}
          <Typography 
            variant={isMobile ? "body1" : "h6"} 
            component='div' 
            sx={{
              fontFamily:'poppins',
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              display: { xs: 'block', sm: 'block' }
            }}
          >
            YORFY
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Stack 
              direction="row" 
              spacing={{ md: 0.5, lg: 1 }}
              sx={{ 
                flexGrow: 1,
                ml: { md: 2, lg: 4 }
              }}
            >
              <Button 
                id="resources-button-home"
                sx={{
                  fontWeight: 'bold', 
                  color: 'white',
                  fontSize: { md: '0.85rem', lg: '0.95rem' },
                  px: { md: 1, lg: 1.5 }
                }}
                onClick={handleClick} 
                aria-controls={open ? 'resources' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                endIcon={<ArrowDropDownIcon />}
              >
                Home
              </Button>
              <Button sx={{
                fontWeight: 300, 
                color: 'white',
                fontSize: { md: '0.85rem', lg: '0.95rem' },
                px: { md: 1, lg: 1.5 }
              }}>
                NFT
              </Button>
              <Button sx={{
                fontWeight: 300, 
                color: 'white',
                fontSize: { md: '0.85rem', lg: '0.95rem' },
                px: { md: 1, lg: 1.5 }
              }}>
                RoadMap
              </Button>
              <Button sx={{
                fontWeight: 300, 
                color: 'white',
                fontSize: { md: '0.85rem', lg: '0.95rem' },
                px: { md: 1, lg: 1.5 }
              }}>
                About Us
              </Button>
              <Button sx={{
                fontWeight: 300, 
                color: 'white',
                fontSize: { md: '0.85rem', lg: '0.95rem' },
                px: { md: 1, lg: 1.5 }
              }}>
                Contact Us
              </Button>
              <Button 
                id="resources-button-pages"
                sx={{
                  fontWeight: 300, 
                  color: 'white',
                  fontSize: { md: '0.85rem', lg: '0.95rem' },
                  px: { md: 1, lg: 1.5 }
                }}
                onClick={handleClick} 
                aria-controls={open ? 'resources' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                endIcon={<ArrowDropDownIcon />}
              >
                Pages
              </Button>
            </Stack>
          )}

          {/* Spacer for mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }} />

          {/* Join Us Button - Desktop/Tablet */}
          {!isMobile && (
            <Button 
              variant="contained" 
              color="primary"
              sx={{
                px: { md: 2, lg: 3 },
                py: { md: 0.75, lg: 1 },
                fontSize: { md: '0.85rem', lg: '0.95rem' }
              }}
            >
              Join Us
            </Button>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Desktop Dropdown Menu */}
          <Menu 
            id="resources" 
            anchorEl={anchorEl} 
            open={open}
            MenuListProps={{ 'aria-labelledby': 'resources-button' }}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem> 
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280 
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default MuiNavbar;