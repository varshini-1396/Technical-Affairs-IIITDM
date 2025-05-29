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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';

// Styled components
const TeamMemberCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const clubData = {
  name: 'Robotics Club',
  logo: '/images/clubs/robotics-logo.jpg',
  description: `The Robotics Club at IIITDM Kancheepuram is a hub of innovation and technical excellence. We focus on developing practical robotics solutions through hands-on projects, workshops, and competitions. Our members work on various aspects of robotics including mechanical design, electronics, control systems, and artificial intelligence. The club regularly participates in national and international robotics competitions and organizes workshops to spread knowledge about robotics among the student community.`,
  core: [
    {
      name: 'John Doe',
      role: 'Club Head',
      image: '/images/team/john-doe.jpg',
      email: 'john.doe@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/johndoe',
      year: 'B.Tech 3rd Year',
      department: 'Mechanical Engineering'
    },
    {
      name: 'Jane Smith',
      role: 'Technical Head',
      image: '/images/team/jane-smith.jpg',
      email: 'jane.smith@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/janesmith',
      year: 'B.Tech 3rd Year',
      department: 'Electronics Engineering'
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
      department: 'Computer Science'
    },
    {
      name: 'Bob Wilson',
      role: 'Team Member',
      image: '/images/team/bob-wilson.jpg',
      email: 'bob.wilson@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/bobwilson',
      year: 'B.Tech 2nd Year',
      department: 'Mechanical Engineering'
    },
    {
      name: 'Carol Brown',
      role: 'Team Member',
      image: '/images/team/carol-brown.jpg',
      email: 'carol.brown@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/carolbrown',
      year: 'B.Tech 2nd Year',
      department: 'Electronics Engineering'
    },
    {
      name: 'David Lee',
      role: 'Team Member',
      image: '/images/team/david-lee.jpg',
      email: 'david.lee@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/davidlee',
      year: 'B.Tech 2nd Year',
      department: 'Computer Science'
    }
  ],
  links: {
    website: 'https://robotics.iiitdm.ac.in',
    instagram: 'https://instagram.com/robotics_iiitdm',
    github: 'https://github.com/robotics-iiitdm'
  }
};

function RoboticsClub() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Logo Section */}
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
          <CardMedia
            component="img"
            image={clubData.logo}
            alt={`${clubData.name} Logo`}
            sx={{
              width: '100%%',
              maxWidth: '300px',
              height: 'auto',
              borderRadius: 2,
            }}
          />
        </Box>

        {/* Club Name */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            {clubData.name}
          </Typography>
        </Box>

        {/* Description and Links Container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 8 },
            mb: 6,
            maxWidth: '1000px',
            mx: 'auto',
            px: { xs: 2, sm: 3, md: 4 },
            alignItems: 'flex-start',
          }}
        >
          {/* Description */}
          <Box sx={{ flex: 1, textAlign: 'left' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'text.secondary',
                whiteSpace: 'pre-line',
              }}
            >
              {clubData.description}
            </Typography>
          </Box>

          {/* Links */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              gap: 2,
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            {/* Website Link */}
            <Button
              component="a"
              href={clubData.links.website}
              target="_blank"
              variant="text"
              color="primary"
              size="large"
              sx={{
                fontSize: '1.1rem',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
              startIcon={<LanguageIcon />}
            >
              Website
            </Button>

            {/* WhatsApp Link (Placeholder) */}
            <Button
              component="a"
              href="#whatsapp-link" // Replace with actual WhatsApp link
              target="_blank"
              variant="text"
              color="success"
              size="large"
              sx={{
                fontSize: '1.1rem',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
              startIcon={/* Replace with WhatsAppIcon */ null}
            >
              Join Community
            </Button>
          </Box>
        </Box>

        {/* Core Team Section */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 4,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          Core Team
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            mb: 8,
            justifyContent: 'center',
            maxWidth: '1000px',
            mx: 'auto'
          }}
        >
          {clubData.core.map((member) => (
            <Grid item xs={12} md={6} key={member.name} sx={{ display: 'flex', justifyContent: 'center' }}>
              <TeamMemberCard sx={{ maxWidth: '400px', width: '100%' }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 150, height: 150, mb: 2 }}
                />
                <Typography variant="h6" component="h3" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {member.year}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {member.department}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <IconButton
                    component="a"
                    href={`mailto:${member.email}`}
                    color="primary"
                  >
                    <EmailIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={member.linkedin}
                    target="_blank"
                    color="primary"
                  >
                    <LinkedInIcon />
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
            color: 'primary.main',
          }}
        >
          Team Members
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            mb: 8,
            justifyContent: 'center',
            maxWidth: '1200px',
            mx: 'auto'
          }}
        >
          {clubData.team.map((member) => (
            <Grid item xs={12} sm={6} md={3} key={member.name} sx={{ display: 'flex', justifyContent: 'center' }}>
              <TeamMemberCard sx={{ maxWidth: '280px', width: '100%' }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                <Typography variant="h6" component="h3" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {member.year}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {member.department}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <IconButton
                    component="a"
                    href={`mailto:${member.email}`}
                    color="primary"
                  >
                    <EmailIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={member.linkedin}
                    target="_blank"
                    color="primary"
                  >
                    <LinkedInIcon />
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
              color: 'primary.main',
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