import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
} from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

// Team member data
const teamData = {
  secretary: {
    name: "P Kaarthick Natesh",
    position: "Technical Affairs Secretary",
    image: "/technical-affairs-team/PKaarthickNatesh.png",
    email: "ec22b1004@iiitdm.ac.in",
    linkedin: "",
  },
  jointSecretary: {
    name: "Ranveer Gautam",
    position: "Technical Affairs Joint Secretary",
    image: "/technical-affairs-team/RanveerGautam.jpg",
    email: "me23b2031@iiitdm.ac.in",
    linkedin: "",
  },
  coreTeam: [
    {
      name: "R Darshan Karthikeya",
      position: "Tech Development Core",
      image: "/technical-affairs-team/RDarshanKarthikeya.jpg",
      email: "cs22b1022@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/darshan-karthikeya",
    },
    {
      name: "Avula Varshini",
      position: "Tech Development Core",
      image: "/technical-affairs-team/AVarshini.jpg",
      email: "cs23b1015@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/varshini-avula",
    },
    {
      name: "S M Jawhra",
      position: "Management Core",
      image: "/technical-affairs-team/SMJawhra.jpg",
      email: "cs23b1053@iiitdm.ac.in",
      linkedin:
        "https://www.linkedin.com/in/s-m-jawhra-2150902b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Dharun Thota",
      position: "Management Core",
      image: "/technical-affairs-team/DharunThota.jpg",
      email: "cs22b1083@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/dharun-thota-742915264/",
    },
    {
      name: "Omkar Anand Iyer",
      position: "Social Outreach Core",
      image: "/technical-affairs-team/OmkarAnandIyer.jpg",
      email: "ec23b1075@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/omkar-anand-iyer",
    },
    {
      name: "Parth Pandey",
      position: "Publicity Jt Core",
      image: "/technical-affairs-team/ParthPandey.png",
      email: "cs23i1064@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/parth-pandey-b20932299/",
    },
    {
      name: "SHREEPAL",
      position: "Innovation Core",
      image: "/technical-affairs-team/Shreepal.jpg",
      email: "ec23b1107@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/shreepal29",
    },
    {
      name: "Akash Patel",
      position: "Design Jt Core",
      image: "/technical-affairs-team/AkashPatel.jpg",
      email: "cs23i1055@iiitdm.ac.in",
      linkedin: "https://linkedin.com/in/whoakashpatel",
    },
    {
      name: "P. Swaminatha",
      position: "Sponsorship & Finance Jt Core",
      image: "/technical-affairs-team/PSwaminatha.jpg",
      email: "ec23b1091@iiitdm.ac.in",
      linkedin: "https://www.linkedin.com/in/putcha-swaminatha-a707b92a3/",
    },
    {
      name: "Satyam Kumar Pandey",
      position: "Media and Marketing Core",
      image: "/technical-affairs-team/SatyamKumarPandey.jpg",
      email: "ec23b1103@iiitdm.ac.in",
      linkedin:
        "https://www.linkedin.com/in/satyam-pandey-1a10442a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
};

const socialMediaLinks = {
  instagram: "https://www.instagram.com/iiitdm.technical/",
  linkedin: "https://www.linkedin.com/company/technical-affairs-iiitdm/",
  youtube: "https://www.youtube.com/@iiitdm.technical",
};

function Committee() {
  const navigate = useNavigate();
  const cardStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.02)",
    },
    width: "100%",
    minWidth: "140px",
    maxWidth: "140px",
  };

  const imageStyle = {
    height: 160,
    objectFit: "cover",
    width: "100%",
  };

  const nameStyle = {
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
      md: "0.8rem",
    },
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
  };

  const descriptionStyle = {
    fontSize: {
      xs: "0.6rem",
      sm: "0.7rem",
      md: "0.8rem",
    },
    width: "100%",
    textAlign: "center",
    padding: "0 4px",
  };

  const titleStyle = {
    background: "linear-gradient(45deg, #1976d2, #9c27b0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      {/* SAC Technical Affairs Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={titleStyle}
        >
          SAC Technical Affairs
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {/* Secretary */}
          <Grid
            item
            xs="auto"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                image={teamData.secretary.image}
                alt={teamData.secretary.name}
                sx={imageStyle}
              />
              <CardContent sx={{ py: 1, px: 1 }}>
                <Box sx={{ minHeight: "5em" }}>
                  <Typography variant="h6" component="h3" sx={nameStyle}>
                    {teamData.secretary.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={descriptionStyle}
                  >
                    {teamData.secretary.position}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mt: 1,
                  }}
                >
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
          {/* Joint Secretary */}
          <Grid
            item
            xs="auto"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                image={teamData.jointSecretary.image}
                alt={teamData.jointSecretary.name}
                sx={imageStyle}
              />
              <CardContent sx={{ py: 1, px: 1 }}>
                <Box sx={{ minHeight: "5em" }}>
                  <Typography variant="h6" component="h3" sx={nameStyle}>
                    {teamData.jointSecretary.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={descriptionStyle}
                  >
                    {teamData.jointSecretary.position}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mt: 1,
                  }}
                >
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

      {/* Core Team Navigation Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={titleStyle}
        >
          Core Teams
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            { label: 'Tech Development', path: '/committee/tech-development' },
            { label: 'Management', path: '/committee/management' },
            { label: 'Innovation', path: '/committee/innovation' },
            { label: 'Social Outreach', path: '/committee/social-outreach' },
            { label: 'Media and Marketing', path: '/committee/media-and-marketing' },
          ].map((team, idx) => (
            <Grid item xs={12} sm={6} md={2} key={team.label} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  cursor: 'pointer',
                  width: { xs: 120, sm: 180 },
                  height: { xs: 150, sm: 200 },
                  minWidth: { xs: 120, sm: 180 },
                  minHeight: { xs: 150, sm: 200 },
                  maxWidth: { xs: 120, sm: 180 },
                  maxHeight: { xs: 150, sm: 200 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 2,
                  boxShadow: 3,
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
                onClick={() => navigate(team.path)}
              >
                <img
                  src="https://via.placeholder.com/80x80.png?text=Logo"
                  alt={team.label + ' logo'}
                  style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', marginBottom: 12 }}
                />
                <Typography variant="h6" align="center" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>{team.label}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Social Media Section */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={titleStyle}>
          Connect With Us
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
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

export default Committee;
