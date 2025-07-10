import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Avatar,
  IconButton,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles';

// Styled components
const TeamMemberCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  textAlign: 'center',
  width: '180px',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    width: '140px',
  }
}));

const clubData = {
  name: 'Robotics Club',
  logo: '/clubs/robotics/logo.png',
  description: `The Robotics Club at IIITDM Kancheepuram is a student-driven community dedicated to exploring and advancing the field of robotics and automation. The club provides hands-on experience in designing, building, and programming autonomous robots and automated systems, encouraging members to apply their theoretical knowledge in practical scenarios.\nStudents work on interdisciplinary projects involving embedded systems, computer vision, control systems, and mechanical design, developing solutions for real-world applications such as industrial automation, intelligent vehicles, and smart systems.\nThe club actively participates in national and international robotics competitions and conducts workshops, hackathons, and technical sessions to nurture a culture of innovation, teamwork, and problem-solving within the robotics domain.`,
  core: [
    {
      name: 'Dhanvanth Saravanan',
      role: 'Club Lead',
      image: '/clubs/robotics/headcores/dhanvanth.jpg',
      email: 'ec23b1097@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/dhanvanth-saravanan-366956288',
      roll: 'ec23b1097',
    },
    {
      name: 'Hemachandra K S',
      role: 'Software Lead',
      image: '/images/team/jane-smith.jpg',
      email: 'me23b2020@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/hemachandra-k-s-323382332',
      roll: 'me23b2020',
    },
  ],
  team: [
    {
      name: 'Alice Johnson',
      role: 'Team Member',
      image: '/images/team/alice-johnson.jpg',
      email: 'alice.johnson@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/alicejohnson',
      year: 'B.Tech 2nd Year',
      department: 'Mechanical Engineering'
    },
    {
      name: 'Bob Wilson',
      role: 'Team Member',
      image: '/images/team/bob-wilson.jpg',
      email: 'bob.wilson@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/bobwilson',
      year: 'B.Tech 2nd Year',
      department: 'Electronics Engineering'
    },
    {
      name: 'Carol Brown',
      role: 'Team Member',
      image: '/images/team/carol-brown.jpg',
      email: 'carol.brown@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/carolbrown',
      year: 'B.Tech 2nd Year',
      department: 'Computer Science'
    },
    {
      name: 'David Lee',
      role: 'Team Member',
      image: '/images/team/david-lee.jpg',
      email: 'david.lee@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/davidlee',
      year: 'B.Tech 2nd Year',
      department: 'Mechanical Engineering'
    }
  ],
  links: {
    website: 'https://robotics.iiitdm.ac.in',
    instagram: 'https://www.instagram.com/roboticsclub.iiitdm/',
    github: 'https://github.com/robotics-iiitdm'
  }
};

function RoboticsClub() {
  const theme = useTheme();
  return (
    <Box sx={{ py: 8, pt: { xs: 12, sm: 14, md: 16 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header Section with Logo and Title */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 6, justifyContent: { xs: 'center', md: 'flex-start' } }}>
          {/* Logo on the left */}
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
              pt: { md: 4 }, // Top padding on laptops
              pb: { xs: 2, md: 0 }, // Bottom padding on mobile
              pr: { md: 4 }, // Right padding on laptops
              height: '100%'
            }}>
              <CardMedia
                component="img"
                image={clubData.logo}
                alt={`${clubData.name} Logo`}
                sx={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'contain',
                  borderRadius: 0, 
                  boxShadow: 0, 
                }}
              />
            </Box>
          </Grid>

          {/* Title and Description on the right */}
          <Grid item xs={12} md={8} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
            }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
                  fontWeight: 'bold',
                  mb: 3,
                  background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                  width: '100%', 
                  textAlign: 'inherit'
                }}
              >
                {clubData.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  maxWidth: '800px',
                  textAlign: 'inherit'
                }}
              >
                {clubData.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={clubData.links.website}
                target="_blank"
                size="medium"
                sx={{
                  mt: 3,
                  maxWidth: 200,
                  mx:'auto',
                  background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
                  color: 'white',
                  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                  '&:hover': {
                    bgcolor: 'primary.dark'
                  }
                }}
              >
                Visit Website
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Core Team Section */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 4,
            textAlign: 'center',
            fontWeight: 'bold',
            color: theme.palette.primary.main,
          }}
        >
          Core Team
        </Typography>
        <Grid 
          container 
          spacing={2}
          justifyContent='center'
          sx={{
            mb: 8,
            maxWidth: '1200px',
            mx: 'auto'
          }}
        >
          {clubData.core.map((member) => (
            <Grid 
              item 
              xs={6} 
              sm={6} 
              md={3} 
              key={member.name} 
              sx={{
                display: 'flex', 
                justifyContent: 'center',
                width: { xs: '140px', sm: '180px' },
                flex: '0 0 auto'
              }}
            >
              <TeamMemberCard sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: { xs: 70, sm: 90, md: 110 },
                    height: { xs: 70, sm: 90, md: 110 },
                    mb: { xs: 0.75, sm: 1, md: 1.5 }
                  }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.1rem' },
                    mb: { xs: 0.5, sm: 0.75, md: 0.75 },
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: 1.2
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  sx={{
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                    mb: { xs: 0.5, sm: 0.5, md: 0.75 },
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: 1.2
                  }}
                >
                  {member.role}
                </Typography>

                <Box sx={{ 
                  mt: 'auto',
                  pt: { xs: 0.75, sm: 1, md: 1.5 },
                  display: 'flex',
                  gap: { xs: 0.4, sm: 0.6, md: 0.8 },
                  justifyContent: 'center'
                }}>
                  <IconButton
                    component="a"
                    href={`mailto:${member.email}`}
                    color="primary"
                    size="small"
                    sx={{
                      padding: { xs: '3px', sm: '6px', md: '10px' }
                    }}
                  >
                    <EmailIcon sx={{ fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' } }} />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={member.linkedin}
                    target="_blank"
                    color="primary"
                    size="small"
                    sx={{
                      padding: { xs: '3px', sm: '6px', md: '10px' }
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' } }} />
                  </IconButton>
                </Box>
              </TeamMemberCard>
            </Grid>
          ))}
        </Grid>



        {/* Links Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              mb: 4,
              fontWeight: 'bold',
              color: theme.palette.primary.main,
            }}
          >
            Connect With Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              component="a"
              href={clubData.links.website}
              target="_blank"
              color="primary"
              size="large"
            >
              <LanguageIcon />
            </IconButton>
            <IconButton
              component="a"
              href={clubData.links.instagram}
              target="_blank"
              color="primary"
              size="large"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component="a"
              href={clubData.links.github}
              target="_blank"
              color="primary"
              size="large"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default RoboticsClub;