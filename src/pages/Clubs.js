import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const clubsData = [
  {
    name: 'Robotics Club',
    image: '/images/clubs/robotics.jpg',
    link: '/clubs/robotics',
  },
  {
    name: 'Programming Club',
    image: '/images/clubs/programming.jpg',
    link: '/clubs/programming',
  },
  {
    name: 'Electronics Club',
    image: '/images/clubs/electronics.jpg',
    link: '/clubs/electronics',
  },
  {
    name: 'Aeromodelling Club',
    image: '/images/clubs/aeromodelling.jpg',
    link: '/clubs/aeromodelling',
  },
  {
    name: 'Web Development Club',
    image: '/images/clubs/webdev.jpg',
    link: '/clubs/webdev',
  },
  {
    name: 'AI/ML Club',
    image: '/images/clubs/aiml.jpg',
    link: '/clubs/aiml',
  },
];

function Clubs() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
              fontWeight: 'bold',
              mb: 4,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Technical Clubs
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
          >
            Join our vibrant technical clubs to enhance your skills, work on exciting projects,
            and connect with like-minded peers. Each club offers unique opportunities for
            learning and growth in various technical domains.
          </Typography>
        </Box>

        {/* Clubs Grid */}
        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
          sx={{ 
            maxWidth: '1200px',
            mx: 'auto',
            px: { xs: 2, sm: 3, md: 4 }
          }}
        >
          {clubsData.map((club) => (
            <Grid 
              item 
              key={club.name} 
              xs={12} 
              sm={6} 
              md={4}
              sx={{ 
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <StyledCard sx={{ width: '100%', maxWidth: '350px' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={club.image}
                  alt={club.name}
                  sx={{
                    objectFit: 'cover',
                    bgcolor: 'grey.200',
                  }}
                />
                <CardContent sx={{ 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {club.name}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={club.link}
                    sx={{ mt: 'auto' }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Clubs; 