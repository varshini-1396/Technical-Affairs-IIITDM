import React, { useCallback } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  const theme = useTheme();
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: false,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: theme.palette.primary.main,
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'out',
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 },
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            textAlign: 'center', 
            maxWidth: '800px', 
            margin: '0 auto',
            paddingTop: '100px' // Add some top padding to account for navbar
          }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                lineHeight: 1.2,
              }}
            >
              Empowering Innovation at
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 700,
                mb: 4,
                background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                lineHeight: 1.2,
              }}
            >
              IIITDM Kancheepuram
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="large"
                component="a"
                href="#clubs"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                Explore Clubs
              </Button>
              <Button
                variant="outlined"
                size="large"
                component="a"
                href="#teams"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                Explore Teams
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 