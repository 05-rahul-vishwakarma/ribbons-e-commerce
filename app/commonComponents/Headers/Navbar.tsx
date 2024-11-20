"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';


const pages = [
  { title: 'Home', link: '/' },
  { title: 'Product', link: '/product' },
  { title: 'About', link: '/about' },
  { title: 'Blog', link: '/blog' },
  { title: 'Contact', link: '/contact' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar style={{ background: 'white' , fontSize:"14px",color:"black" , padding:"0 2rem" }} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Section */}
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Image src={'/logo.png'} alt="logo" width={50} height={50} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{color:"black"}} >{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, i) => (
              <Link href={page.link} key={i}>
                <Button style={{color:"black",fontWeight:"700"}} sx={{ my: 2,  display: 'block' }}>
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              // flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '300px',
              mx: 10,
              color:'black',
              borderBottom: '1px solid black',
            }}
          >
            <InputBase
              placeholder="Search Products"
              sx={{
                color: 'black',
                '& .MuiInputBase-input': {
                  borderBottom: '1px solid transparent',
                  '&:focus': {
                    borderBottom: '1px solid white',
                  },
                },
              }}
            />
            <SearchIcon sx={{ color: 'black', mr: 1 }} />
          </Box>

          <Box sx={{fontWeight:"700",fontSize:"14px" }} >
            My Account
            <AddShoppingCartIcon sx={{m:2 }} />
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
