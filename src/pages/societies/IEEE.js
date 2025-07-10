import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  IconButton,
  Button,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

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
  name: 'IEEE Student Branch',
  logo: '/societies/IEEE/logo.png',
  description: `The IEEE Student Branch at IIITDM Kancheepuram is the official chapter of the Institute of Electrical and Electronics Engineers (IEEE), dedicated to promoting learning, research, and innovation in electrical and electronics engineering, robotics, and emerging technologies.\nThe branch focuses on helping students build technical expertise in fields such as IoT, artificial intelligence, renewable energy systems, and embedded technologies. It encourages participation in IEEE conferences, exploration of research opportunities, and the development of innovative projects that solve real-world challenges.\nThrough its growing activities, the student branch aims to organize technical workshops, robotics challenges, and research symposiums, creating a platform for collaborative learning and technical growth.`,
  core: [
    {
      name: 'Arjun Singh',
      role: 'Branch Chair',
      image: '/images/team/arjun-singh.jpg',
      email: 'arjun.singh@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/arjunsingh',
      year: 'B.Tech 3rd Year',
      department: 'Electronics Engineering',
      roll: 'ec23b3001'
    },
    {
      name: 'Kavya Iyer',
      role: 'Vice Chair',
      image: '/images/team/kavya-iyer.jpg',
      email: 'kavya.iyer@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/kavyaiyer',
      year: 'B.Tech 3rd Year',
      department: 'Electronics Engineering',
      roll: 'ec23b3002'
    }
  ],
  team: [
    {
      name: 'Vikram Malhotra',
      role: 'Technical Secretary',
      image: '/images/team/vikram-malhotra.jpg',
      email: 'vikram.malhotra@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/vikrammalhotra',
      year: 'B.Tech 2nd Year',
      department: 'Electronics Engineering',
      roll: 'ec23b3003'
    },
    {
      name: 'Ananya Das',
      role: 'Events Secretary',
      image: '/images/team/ananya-das.jpg',
      email: 'ananya.das@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/ananyadas',
      year: 'B.Tech 2nd Year',
      department: 'Electronics Engineering',
      roll: 'ec23b3004'
    }
  ],
  links: {
    website: 'https://ieee.iiitdm.ac.in',
    instagram: 'https://instagram.com/ieee_iiitdm',
    github: 'https://github.com/ieee-iiitdm'
  }
};

function IEEE() {
  const theme = useTheme();
  return (
    <Box sx={{ py: 8, pt: { xs: 12, sm: 14, md: 16 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header Section with Logo and Title */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 8, justifyContent: { xs: 'center', md: 'flex-start' } }}>
          {/* Logo on the left */}
          <Grid item xs={12} md={4}>
            <Box sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
              pt: { md: 4 },
              pb: { xs: 2, md: 0 },
              pr: { md: 4 },
              height: '100%'
            }}>
              <Box
                component="img"
                src={clubData.logo}
                alt={`${clubData.name} logo`}
                sx={{
                  display: 'block',
                  width: '200px',
                  height: '200px',
                  objectFit: 'contain',
                  borderRadius: 0,
                  boxShadow: 0,
                  marginLeft: { xs: 'auto', md: '0' },
                  marginRight: { xs: 'auto', md: '0' },
                  
                }}
              />
            </Box>
          </Grid>

          {/* Title and Description on the right */}
          <Grid item xs={12} md={8}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'center' },
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
                  textAlign: { xs: 'center', md: 'center' }
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
                  textAlign: { xs: 'center', md: 'center' }
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
                  {member.roll}
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
                  {member.roll}
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

export default IEEE; 