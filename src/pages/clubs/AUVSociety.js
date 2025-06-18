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
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  }
}));

const clubData = {
  name: 'AUV Society',
  logo: '/clubs/auv/logo.png',
  description: `The Autonomous Underwater Vehicle (AUV) Society at IIITDM Kancheepuram is dedicated to developing underwater robotics and autonomous systems. We focus on designing, building, and programming AUVs for various applications including underwater exploration, research, and competitions. Our members work on mechanical design, electronics, control systems, and computer vision. The society participates in national and international AUV competitions and conducts workshops to spread knowledge about underwater robotics.`,
  core: [
    {
      name: 'Shree Mithun N',
      role: 'Soceity Head',
      image: '/clubs/shreemithun.jpg',
      email: 'me23b2024@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/shree-mithun-n-43ba49241',
      year: 'B.Tech 3rd Year',
      department: 'Mechanical Engineering'
    },
    {
      name: 'Abinav R',
      role: 'Soceity Head',
      image: '/clubs/abinav.jpg',
      email: 'me23b1004@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/abinav-rajagopal-2ba65a286',
      year: 'B.Tech 3rd Year',
      department: 'Mechanical Engineering'
    }
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
    }
  ],
  links: {
    website: 'https://auviiitdm.github.io/',
    instagram: 'https://www.instagram.com/auv_iiitdm/',
    github: 'https://github.com/auv-iiitdm'
  }
};

function AUVSociety() {
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
                  maxWidth: 150,
                  mx: 'auto',
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
                minWidth: 0,
              }}
            >
              <TeamMemberCard sx={{ 
                 width: '100%',
                 minWidth: 0,
                 flexGrow: 1
              }}>
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
                  gutterBottom
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.1rem' },
                    mb: { xs: 0.5, sm: 0.75, md: 0.75 },
                     wordBreak: 'break-word',
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                    mb: { xs: 0.5, sm: 0.5, md: 0.75 },
                    wordBreak: 'break-word',
                  }}
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' },
                    mb: { xs: 0.25, sm: 0.25, md: 0.5 },
                     wordBreak: 'break-word',
                  }}
                >
                  {member.year}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' },
                    mb: { xs: 0.25, sm: 0.25, md: 0.5 },
                     wordBreak: 'break-word',
                  }}
                >
                  {member.department}
                </Typography>
                <Box sx={{ 
                  mt: { xs: 0.75, sm: 1, md: 1.5 },
                  display: 'flex',
                  gap: { xs: 0.4, sm: 0.6, md: 0.8 },
                  flexWrap: 'wrap',
                  justifyContent: 'center',
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

        {/* Team Members Section */}
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
          Team Members
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
          {clubData.team.map((member) => (
            <Grid 
              item 
              xs={6} 
              sm={6} 
              md={3} 
              key={member.name} 
              sx={{
                display: 'flex', 
                justifyContent: 'center',
                minWidth: 0,
              }}
            >
              <TeamMemberCard sx={{ 
                width: '100%', 
                minWidth: 0,
                maxWidth: { xs: '140px', sm: '180px', md: '250px' },
                flexGrow: 1
              }}>
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
                  gutterBottom
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.1rem' },
                    mb: { xs: 0.5, sm: 0.75, md: 0.75 },
                    wordBreak: 'break-word', 
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                    mb: { xs: 0.5, sm: 0.5, md: 0.75 },
                    wordBreak: 'break-word', 
                  }}
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' },
                    mb: { xs: 0.25, sm: 0.25, md: 0.5 },
                    wordBreak: 'break-word', 
                  }}
                >
                  {member.year}
                </Typography>
                <Box sx={{ 
                  mt: { xs: 0.75, sm: 1, md: 1.5 },
                  display: 'flex',
                  gap: { xs: 0.4, sm: 0.6, md: 0.8 },
                  flexWrap: 'wrap', 
                  justifyContent: 'center', 
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

export default AUVSociety; 