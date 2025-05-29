import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme as useMuiTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../../context/ThemeContext';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Clubs', href: '/clubs' },
  { name: 'Teams', href: '/teams' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const theme = useMuiTheme();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: scrolled
          ? theme.palette.mode === 'dark'
            ? 'rgba(18, 18, 18, 0.9)'
            : 'rgba(255, 255, 255, 0.9)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? theme.shadows[4] : 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 3 } }}>
        <Box
          component="img"
          src="/logo.png"
          alt="Technical Affairs Logo"
          sx={{
            height: 40,
            mr: 2,
            display: { xs: 'none', md: 'block' },
            filter: theme.palette.mode === 'dark' ? 'brightness(1.2)' : 'invert(1)',
          }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'block' },
            fontWeight: 700,
            color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
          }}
        >
          Technical Affairs
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              component="a"
              href={item.href}
              color="inherit"
              sx={{
                color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              {item.name}
            </Button>
          ))}
          <IconButton
            onClick={toggleTheme}
            sx={{
              color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{
            display: { md: 'none' },
            color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 