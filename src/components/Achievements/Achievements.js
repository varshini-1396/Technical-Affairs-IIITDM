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
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const achievements = [
  {
    title: 'Robocon 2023',
    description: 'Secured 3rd position in ABU Robocon 2023 competition.',
    image: '/achievements/robocon.jpg',
    date: 'August 2023',
    category: 'Robotics',
  },
  {
    title: 'SAE Aero Design',
    description: 'Achieved 2nd place in SAE Aero Design West competition.',
    image: '/achievements/sae.jpg',
    date: 'March 2023',
    category: 'Aerospace',
  },
  {
    title: 'Smart India Hackathon',
    description: 'Won 1st prize in Smart India Hackathon 2023.',
    image: '/achievements/sih.jpg',
    date: 'January 2023',
    category: 'Innovation',
  },
  {
    title: 'Efficycle 2023',
    description: 'Secured 4th position in SAE Efficycle competition.',
    image: '/achievements/efficycle.jpg',
    date: 'October 2023',
    category: 'Automotive',
  },
  {
    title: 'AUV Competition',
    description: 'Achieved 2nd place in NIOT AUV competition.',
    image: '/achievements/auv.jpg',
    date: 'December 2023',
    category: 'Marine',
  },
  {
    title: 'Hackathon Winners',
    description: 'Won 1st prize in IEEE Hackathon 2023.',
    image: '/achievements/hackathon.jpg',
    date: 'November 2023',
    category: 'Coding',
  },
];

const Achievements = () => {
  return (
    <Box
      id="achievements"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
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
            Our Achievements
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} sm={6} md={4} key={achievement.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={achievement.image}
                    alt={achievement.title}
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={achievement.category}
                        size="small"
                        sx={{ mr: 1 }}
                      />
                      <Chip
                        label={achievement.date}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {achievement.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {achievement.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        mt: 'auto',
                        textTransform: 'none',
                      }}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 6,
          }}
        >
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              textTransform: 'none',
            }}
          >
            View All Achievements
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Achievements; 