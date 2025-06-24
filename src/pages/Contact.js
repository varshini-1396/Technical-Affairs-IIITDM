import React from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box,
  IconButton
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Email
} from '@mui/icons-material';

// Team member data
const teamData = {
  secretary: {
    name: "P Kaarthick Natesh",
    position: "Technical Affairs Secretary",
    image: "/path-to-secretary-image.jpg",
    email: "ec22b1004@iiitdm.ac.in",
    linkedin: ""
  },
  jointSecretary: {
    name: "Ranveer Gautam",
    position: "Technical Affairs Joint Secretary",
    image: "/path-to-joint-secretary-image.jpg",
    email: "me23b2031@iiitdm.ac.in",
    linkedin: ""
  },
  coreTeam: [
    {
      name: "R Darshan Karthikeya",
      position: "Tech Development Core",
      image: "/path-to-core-team-image.jpg",
      email: "cs22b1022@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/darshan-karthikeya"
    },
    {
      name: "Avula Varshini",
      position: "Tech Development Core",
      image: "/path-to-core-team-image.jpg",
      email: "cs23b1015@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/varshini-avula"
    },
    {
      name: "S M Jawhra",
      position: "Management Core",
      image: "/path-to-core-team-image.jpg",
      email: "cs23b1053@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/s-m-jawhra-2150902b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Dharun Thota",
      position: "Management Core",
      image: "/path-to-core-team-image.jpg",
      email: "cs22b1083@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/dharun-thota-742915264/"
    },
    {
      name: "Omkar Anand Iyer",
      position: "Social Outreach Core",
      image: "/path-to-core-team-image.jpg",
      email: "ec23b1075@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/omkar-anand-iyer"
    },
    {
      name: "Parth Pandey",
      position: "Publicity Jt Core",
      image: "/path-to-core-team-image.jpg",
      email: "cs23i1064@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/parth-pandey-b20932299/"
    },
    {
      name: "SHREEPAL",
      position: "Innovation Core",
      image: "/path-to-core-team-image.jpg",
      email: "ec23b1107@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/shreepal29"
    },
    {
      name: "Akash Patel",
      position: "Design Jt Core",
      image: "/path-to-core-team-image.jpg",
      email: "cs23i1055@iiitdm.ac.in",
      linkedin: "https://linkedin.com/in/whoakashpatel"
    },
    {
      name: "P. Swaminatha",
      position: "Sponsorship & Finance Jt Core",
      image: "/path-to-core-team-image.jpg",
      email: "ec23b1091@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/putcha-swaminatha-a707b92a3/"
    },
    {
      name: "Satyam Kumar Pandey",
      position: "Media and Marketing Core",
      image: "/path-to-core-team-image.jpg",
      email: "ec23b1103@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/satyam-pandey-1a10442a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
  ]
};

const socialMediaLinks = {
  facebook: 'https://facebook.com/technicalaffairs',
  twitter: 'https://twitter.com/technicalaffairs',
  instagram: 'https://instagram.com/technicalaffairs',
  linkedin: 'https://linkedin.com/company/technicalaffairs',
  youtube: 'https://youtube.com/technicalaffairs'
};

function Contact() {
  const cardStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.02)',
    },
    width: '100%',
    minWidth: '140px',
    maxWidth: '140px',
  };

  const imageStyle = {
    height: 160,
    objectFit: 'cover',
    width: '100%',
  };

  const nameStyle = {
    fontSize: {
      xs: '0.7rem',
      sm: '0.8rem',
      md: '0.9rem'
    },
    width: '100%',
    textAlign: 'center',
    wordWrap: 'break-word',
    padding: '0 4px'
  };

  const descriptionStyle = {
    fontSize: {
      xs: '0.6rem',
      sm: '0.7rem',
      md: '0.8rem'
    },
    width: '100%',
    textAlign: 'center',
    wordWrap: 'break-word',
    padding: '0 4px'
  };

  const titleStyle = {
    background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    marginBottom: '1rem'
  };

  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      {/* Secretary Section */}
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={titleStyle}
        >
          Technical Affairs Secretary
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', width: '140px' }}>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                image={teamData.secretary.image}
                alt={teamData.secretary.name}
                sx={imageStyle}
              />
              <CardContent sx={{ py: 1, px: 1 }}>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  sx={nameStyle}
                >
                  {teamData.secretary.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={descriptionStyle}
                >
                  {teamData.secretary.position}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
                  <IconButton 
                    size="small" 
                    href={`mailto:${teamData.secretary.email}`}
                    color="primary"
                  >
                    <Email fontSize="small" />
                  </IconButton>
                  <IconButton 
                    size="small" 
                    href={teamData.secretary.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                  >
                    <LinkedIn fontSize="small" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Joint Secretary Section */}
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={titleStyle}
        >
          Technical Affairs Joint Secretary
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', width: '140px' }}>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                image={teamData.jointSecretary.image}
                alt={teamData.jointSecretary.name}
                sx={imageStyle}
              />
              <CardContent sx={{ py: 1, px: 1 }}>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  sx={nameStyle}
                >
                  {teamData.jointSecretary.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={descriptionStyle}
                >
                  {teamData.jointSecretary.position}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
                  <IconButton 
                    size="small" 
                    href={`mailto:${teamData.jointSecretary.email}`}
                    color="primary"
                  >
                    <Email fontSize="small" />
                  </IconButton>
                  <IconButton 
                    size="small" 
                    href={teamData.jointSecretary.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                  >
                    <LinkedIn fontSize="small" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Core Team Section */}
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={titleStyle}
        >
          Core Team
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          {teamData.coreTeam.map((member, index) => (
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', width: '140px' }} key={index}>
              <Card sx={cardStyle}>
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={imageStyle}
                />
                <CardContent sx={{ py: 1, px: 1 }}>
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    sx={nameStyle}
                  >
                    {member.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={descriptionStyle}
                  >
                    {member.position}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
                    <IconButton 
                      size="small" 
                      href={`mailto:${member.email}`}
                      color="primary"
                    >
                      <Email fontSize="small" />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                    >
                      <LinkedIn fontSize="small" />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Social Media Section */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={titleStyle}
        >
          Connect With Us
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton 
            color="primary" 
            href={socialMediaLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton 
            color="primary" 
            href={socialMediaLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter fontSize="large" />
          </IconButton>
          <IconButton 
            color="primary" 
            href={socialMediaLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram fontSize="large" />
          </IconButton>
          <IconButton 
            color="primary" 
            href={socialMediaLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton 
            color="primary" 
            href={socialMediaLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}

export default Contact; 