import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tabs,
  Tab,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const clubs = [
  {
    name: 'Robotics Club',
    description: 'Exploring the world of robotics through hands-on projects and competitions.',
    image: '/clubs/robotics.jpg',
    category: 'Technical',
  },
  {
    name: 'Coding Club',
    description: 'Fostering programming skills through workshops and coding competitions.',
    image: '/clubs/coding.jpg',
    category: 'Technical',
  },
  {
    name: 'Electronics Club',
    description: 'Building electronic circuits and exploring embedded systems.',
    image: '/clubs/electronics.jpg',
    category: 'Technical',
  },
  {
    name: 'Aeromodelling Club',
    description: 'Designing and building aircraft models and drones.',
    image: '/clubs/aeromodelling.jpg',
    category: 'Technical',
  },
  {
    name: 'Web Development Club',
    description: 'Learning modern web technologies and building web applications.',
    image: '/clubs/webdev.jpg',
    category: 'Technical',
  },
];

const teams = [
  {
    name: 'Team Robocon',
    description: 'Representing IIITDM in ABU Robocon competition.',
    image: '/teams/robocon.jpg',
    category: 'Competitive',
  },
  {
    name: 'Team SAE',
    description: 'Designing and building formula-style racing cars.',
    image: '/teams/sae.jpg',
    category: 'Competitive',
  },
  {
    name: 'Team AUV',
    description: 'Developing autonomous underwater vehicles.',
    image: '/teams/auv.jpg',
    category: 'Competitive',
  },
  {
    name: 'Team Aero',
    description: 'Designing and building unmanned aerial vehicles.',
    image: '/teams/aero.jpg',
    category: 'Competitive',
  },
  {
    name: 'Team Efficycle',
    description: 'Building energy-efficient hybrid vehicles.',
    image: '/teams/efficycle.jpg',
    category: 'Competitive',
  },
];

const OurFamily = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      id="our-family"
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
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Our Family
          </Typography>
        </motion.div>

        <Box sx={{ mb: 6 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            centered
            sx={{
              '& .MuiTab-root': {
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                minWidth: 200,
              },
            }}
          >
            <Tab label="Technical Clubs" />
            <Tab label="Competitive Teams" />
          </Tabs>
        </Box>

        <Grid container spacing={4}>
          {(activeTab === 0 ? clubs : teams).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.name}>
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
                    image={item.image}
                    alt={item.name}
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {item.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        mt: 'auto',
                        textTransform: 'none',
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurFamily; 