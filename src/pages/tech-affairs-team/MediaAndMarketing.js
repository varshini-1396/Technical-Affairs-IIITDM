// MOVE FILE TO: src/pages/tech-affairs-team/MediaAndMarketingCore.js
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Avatar,
  IconButton,
  Card,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const TeamMemberCard = styled(Card)(({ theme }) => ({
  height: '100%',
  width: 220,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  textAlign: 'center',
  wordBreak: 'break-word',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    width: 120,
  }
}));

const cores = [
  {
    name: 'Satyam Kumar Pandey',
    role: 'Media and Marketing Core',
    image: '/technical-affairs-team/SatyamKumarPandey.jpg',
    email: 'ec23b1103@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/satyam-pandey-1a10442a6',
    roll: 'EC23B1103',
  },
];

const jtcores = [
  {
    name: 'Anjali Gupta',
    role: 'Media and Marketing Jt. Core',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
    email: 'anjali.gupta@example.com',
    linkedin: 'https://linkedin.com/in/anjaligupta',
    roll: 'EC21B1013',
  },
];

const coordinators = [
  {
    name: 'PUTCHA SWAMINATHA',
    image: 'https://drive.google.com/open?id=1MZONuCZWSMNtWX64ZhtcvgkWWEzbKn9R',
    email: 'ec23b1091@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/putcha-swaminatha-a707b92a3/',
    roll: 'EC23B1091',
  },
  {
    name: 'P Sri Charan Reddy',
    image: 'https://drive.google.com/open?id=1XFY4HN_4mC1ZWqwyXUUqlVIcmxkStP9m',
    email: 'me24b1071@iiitdm.ac.in',
    linkedin: '',
    roll: 'ME24B1071',
  },
  {
    name: 'P Vinay Kumar',
    image: 'https://drive.google.com/open?id=1nyCc3viZgHvX4hdSX0VV3A0i-i9ijlKf',
    email: 'cs24i1028@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/vinay-kumar-959891366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    roll: 'CS24I1028',
  },
  {
    name: 'Jeevani Yalamanchili',
    image: 'https://drive.google.com/open?id=1JbG2k0pfIv94s6U9VuKeIwmGCjwChP3T',
    email: 'cs24b1023@iiitdm.ac.in',
    linkedin: 'www.linkedin.com/in/jeevani-yalamanchili-b47aa536b',
    roll: 'CS24B1023',
  },
  {
    name: 'Pranav',
    image: 'https://drive.google.com/open?id=1eHRNxin9Bqj3PI7NJdPM0yNwHRYJTfHZ',
    email: 'me24b1052@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/pranav-b-5b772531b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    roll: 'ME24B1052',
  },
  {
    name: 'Sharvesh Vikhranth H',
    image: 'https://drive.google.com/open?id=1_OqZlRAPZIyfiDkkUsx2PfPedpECvKAw',
    email: 'me23b1036@iiitdm.ac.in',
    linkedin: 'https://www.linkedin.com/in/sharvesh-vikhranth-h-375ba72ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    roll: 'ME23B1036',
  },
];

function MemberGrid({ members }) {
  if (!members.length) return <Typography color="text.secondary" align="center">No data available.</Typography>;
  return (
    <Grid container spacing={1} justifyContent='center' sx={{ maxWidth: '1200px', mx: 'auto' }}>
      {members.map((member, idx) => (
        <Grid item xs={6} sm={6} md={3} key={member.name} sx={{ display: 'flex', justifyContent: 'center', minWidth: 0 }}>
          <TeamMemberCard sx={{ width: '100%', minWidth: 0, flexGrow: 1 }}>
            <Avatar
              src={member.image}
              alt={member.name}
              sx={{ width: { xs: 70, sm: 90, md: 110 }, height: { xs: 70, sm: 90, md: 110 }, mb: { xs: 0.75, sm: 1, md: 1.5 } }}
            />
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.1rem' },
                mb: { xs: 0.5, sm: 0.75, md: 0.75 },
                width: '100%',
                textAlign: 'center',
                overflowWrap: { xs: 'break-word', sm: 'break-word', md: 'break-word' },
                wordBreak: { xs: 'break-word', sm: 'break-word', md: 'break-word' },
              }}
            >
              {member.name}
            </Typography>
            {member.roll && <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }, mb: { xs: 0.25, sm: 0.25, md: 0.5 }, wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{member.roll}</Typography>}
            <Box sx={{ mt: { xs: 0.75, sm: 1, md: 1.5 }, display: 'flex', gap: { xs: 0.4, sm: 0.6, md: 0.8 }, flexWrap: 'wrap', justifyContent: 'center' }}>
              <IconButton component="a" href={`mailto:${member.email}`} color="primary" size="small" sx={{ padding: { xs: '3px', sm: '6px', md: '10px' } }}>
                <EmailIcon sx={{ fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' } }} />
              </IconButton>
              <IconButton component="a" href={member.linkedin} target="_blank" color="primary" size="small" sx={{ padding: { xs: '3px', sm: '6px', md: '10px' } }}>
                <LinkedInIcon sx={{ fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' } }} />
              </IconButton>
            </Box>
          </TeamMemberCard>
        </Grid>
      ))}
    </Grid>
  );
}

const teamTitleStyle = {
  fontWeight: 'bold',
  fontSize: { xs: '2.2rem', sm: '2.7rem', md: '3.2rem' },
  background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
  mb: 2,
};
const teamDescription = 'The Media and Marketing team manages publicity, branding, and outreach for all technical affairs. We handle social media, design, and communications to promote events and initiatives.';

export default function MediaAndMarketingCore() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" sx={teamTitleStyle} gutterBottom>Media and Marketing</Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', mb: 6 }}>{teamDescription}</Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>Cores</Typography>
        <MemberGrid members={cores} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>Jt. Cores</Typography>
        <MemberGrid members={jtcores} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>Coordinators</Typography>
        <MemberGrid members={coordinators} />
      </Box>
    </Container>
  );
} 