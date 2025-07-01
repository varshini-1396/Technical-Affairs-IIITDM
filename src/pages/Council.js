import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, Tabs, Tab, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// Example data (replace/add real data as needed)
const clubs = [
  { name: 'CS Club', image: '/clubs/csclub/logo.png', link: '/clubs/cs' },
  { name: "Developer's Club", image: '/clubs/devclub/logo.jpg', link: '/clubs/dev' },
  { name: 'System Coding Club', image: '/clubs/scc/logo.png', link: '/clubs/scc' },
  { name: 'E-Cell', image: '/clubs/ecell/logo.png', link: '/clubs/ecell' },
  { name: 'Robotics', image: '/clubs/robotics/logo.png', link: '/clubs/robotics' },
];

const teams = [
  { name: "MaRS (Shunya) - Mars Rover Students' Club", image: '/teams/shunya/logo.png', link: '/teams/shunya' },
  { name: 'AUV (Nira)', image: '/teams/nira/logo.png', link: '/teams/nira' },
  { name: 'SAE e-Baja (ReVolt Racers)', image: '/teams/revolt/logo.png', link: '/teams/revolt' },
  { name: 'SAE Aerothon (Astra)', image: '/teams/astra/logo.png', link: '/teams/astra' },
  { name: 'TAD - Talpade Aero Design', image: '/teams/tad/logo.png', link: '/teams/tad' },
];

const societies = [
  { name: 'IEEE', image: '/societies/ieee/logo.png', link: '/societies/ieee' },
  { name: 'Optica Student Chapter', image: '/societies/optica/logo.png', link: '/societies/optica' },
  { name: 'ASME Student Section', image: '/societies/asme/logo.png', link: '/societies/asme' },
];

const communities = [
  { name: 'Cybersecurity', image: '/communities/cybersecurity/logo.png', link: '/communities/cybersecurity' },
  { name: 'Game Developers', image: '/communities/gamedevelopers/logo.png', link: '/communities/gamedevelopers' },
];

const tabOptions = [
  { label: 'Clubs', data: clubs },
  { label: 'Teams', data: teams },
  { label: 'Societies', data: societies },
  { label: 'Communities', data: communities },
];

const TeamCard = styled(Card)(({ theme }) => ({
  width: 160,
  height: 200,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  boxShadow: theme.shadows[2],
  borderRadius: 12,
  background: theme.palette.background.paper,
  border: `1.5px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200]}`,
  transition: 'transform 0.18s, box-shadow 0.18s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.03)',
    boxShadow: theme.shadows[6],
    borderColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {
    width: 130,
    height: 160,
  },
}));

const Council = () => {
  const [tab, setTab] = useState(0);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const currentList = tabOptions[tab].data;

  // Responsive settings for Tabs
  let tabsVariant = 'fullWidth';
  let scrollButtons = false;
  if (isXs) {
    tabsVariant = 'scrollable';
    scrollButtons = 'auto';
  }

  return (
    <Box sx={{ mt: { xs: 7, md: 9 }, py: { xs: 2, md: 4 }, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2.1rem' },
            fontWeight: 'bold',
            mb: 2,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          Technical Council
        </Typography>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant={tabsVariant}
          scrollButtons={scrollButtons}
          allowScrollButtonsMobile
          sx={{
            mb: 3,
            borderRadius: 2,
            bgcolor: 'background.paper',
            boxShadow: 2,
            minHeight: 36,
            mx: 'auto',
            width: '100%',
            '& .MuiTabs-indicator': {
              background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
              height: 3,
              borderRadius: 2,
            },
          }}
        >
          {tabOptions.map((option, idx) => (
            <Tab
              key={option.label}
              label={option.label}
              sx={{
                fontWeight: 600,
                fontSize: { xs: '0.8rem', sm: '0.95rem' },
                color: 'text.secondary',
                minHeight: 36,
                px: { xs: 0.5, sm: 2 },
                transition: 'color 0.2s',
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              }}
            />
          ))}
        </Tabs>
        <Grid 
          container 
          spacing={2}
          justifyContent="center"
          sx={{ 
            maxWidth: '1200px',
            mx: 'auto',
          }}
        >
          {currentList.map((item) => (
            <Grid 
              item 
              key={item.name} 
              xs={6} 
              sm={4} 
              md={3}
              sx={{ 
                display: 'flex',
                justifyContent: 'center',
                minWidth: 0,
              }}
            >
              <TeamCard
                onClick={() => window.open(item.link, '_self')}
                tabIndex={0}
                role="button"
                aria-label={item.name}
              >
                <Box
                  sx={{
                    width: { xs: 80, sm: 100 },
                    height: { xs: 80, sm: 100 },
                    mb: 1.5,
                    bgcolor: theme => theme.palette.background.default,
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: theme => theme.shadows[1],
                    overflow: 'hidden',
                    p: 1,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontSize: '1rem',
                    mb: 0,
                    wordBreak: 'break-word',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {item.name}
                </Typography>
              </TeamCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Council; 