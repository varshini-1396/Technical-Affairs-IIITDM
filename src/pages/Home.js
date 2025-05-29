import React from 'react';
import { Box } from '@mui/material';

// Import section components
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import OurFamily from '../components/OurFamily/OurFamily';
import Achievements from '../components/Achievements/Achievements';
import Techfest from '../components/Techfest/Techfest';
import Sponsors from '../components/Sponsors/Sponsors';

function Home() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Render the section components */}
      <Hero />
      <About />
      <OurFamily />
      <Achievements />
      <Techfest />
      <Sponsors />
    </Box>
  );
}

export default Home; 