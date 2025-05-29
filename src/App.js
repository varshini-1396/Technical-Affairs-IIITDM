import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import Teams from './pages/Teams';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import { Box } from '@mui/material';

// Import club pages
import RoboticsClub from './pages/clubs/RoboticsClub';
import ProgrammingClub from './pages/clubs/ProgrammingClub';
import ElectronicsClub from './pages/clubs/ElectronicsClub';
import AeromodellingClub from './pages/clubs/AeromodellingClub';
import WebDevClub from './pages/clubs/WebDevClub';
import AIMLClub from './pages/clubs/AIMLClub';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', overflowX: 'hidden' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/clubs/robotics" element={<RoboticsClub />} />
            <Route path="/clubs/programming" element={<ProgrammingClub />} />
            <Route path="/clubs/electronics" element={<ElectronicsClub />} />
            <Route path="/clubs/aeromodelling" element={<AeromodellingClub />} />
            <Route path="/clubs/webdev" element={<WebDevClub />} />
            <Route path="/clubs/aiml" element={<AIMLClub />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
