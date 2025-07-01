import React from 'react';
import { useThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import Teams from './pages/Teams';
import Achievements from './pages/Achievements';
import Committee from './pages/Committee';
import Footer from './components/Footer';
import { Box } from '@mui/material';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

// Import club pages
import CSClub from './pages/clubs/CSClub';
import DevClub from './pages/clubs/DevClub';
import RoboticsClub from './pages/clubs/RoboticsClub';
import SCC from './pages/clubs/SCC';
import ECell from './pages/clubs/ECell';

// Import team pages
import MarsShunya from './pages/teams/MarsShunya';
import AUV from './pages/teams/AUV';
import SAEEBaja from './pages/teams/SAEEBaja';
import SAEAerothon from './pages/teams/SAEAerothon';
import TalpadeAeroDesign from './pages/teams/TalpadeAeroDesign';
import Council from './pages/Council';

// Import community pages
import Cybersecurity from './pages/communities/Cybersecurity';
import GameDevelopers from './pages/communities/GameDevelopers';

// Import society pages
import IEEE from './pages/societies/IEEE';
import OpticaStudentChapter from './pages/societies/OpticaStudentChapter';
import ASMEStudentSection from './pages/societies/ASMEStudentSection';

function App() {
  const { isDarkMode } = useThemeContext();


  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.classList.remove('grids-dark', 'grids-light');
      document.body.classList.add(isDarkMode === true ? 'grids-dark' : 'grids-light');
    }
  }, [isDarkMode]);

  return (
      <Router>
        <ScrollToTop>
          <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', overflowX: 'hidden' }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/clubs/cs" element={<CSClub />} />
              <Route path="/clubs/dev" element={<DevClub />} />
              <Route path="/clubs/robotics" element={<RoboticsClub />} />
              <Route path="/clubs/scc" element={<SCC />} />
              <Route path="/clubs/ecell" element={<ECell />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/teams/nira" element={<AUV />} />
              <Route path="/teams/astra" element={<SAEAerothon />} />
              <Route path="/teams/revolt" element={<SAEEBaja />} />
              <Route path="/teams/shunya" element={<MarsShunya />} />
              <Route path="/teams/tad" element={<TalpadeAeroDesign />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/council" element={<Council />} />
              <Route path="/communities/cybersecurity" element={<Cybersecurity />} />
              <Route path="/communities/gamedevelopers" element={<GameDevelopers />} />
              <Route path="/societies/ieee" element={<IEEE />} />
              <Route path="/societies/optica" element={<OpticaStudentChapter />} />
              <Route path="/societies/asme" element={<ASMEStudentSection />} />
            </Routes>
            <Footer />
          </Box>
        </ScrollToTop>
        <ScrollToTopButton />
      </Router>
  );
}

export default App;
