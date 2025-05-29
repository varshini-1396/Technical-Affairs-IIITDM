import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

const Footer = () => {
  const theme = useTheme();

  const downloads = [
    { name: 'Tech Affairs Brochure', href: '/downloads/brochure.pdf' },
    { name: 'Event Calendar', href: '/downloads/event_calendar.pdf' },
    { name: 'Previous year report', href: '/downloads/previous_year_report.pdf' },
    { name: 'Forms', href: '/downloads/forms.zip' },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, href: 'https://linkedin.com/company/iiitdm-techaffairs' },
    { icon: <InstagramIcon />, href: 'https://instagram.com/iiitdm.techaffairs' },
    { icon: <TwitterIcon />, href: 'https://twitter.com/iiitdm_tech' },
    { icon: <FacebookIcon />, href: 'https://facebook.com/iiitdm.techaffairs' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 4,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary',
                  }}
                >
                  Contact Us
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyle: 'none',
                    p: 0,
                    m: 0,
                  }}
                >
                  <Box
                    component="li"
                    sx={{
                      mb: 2,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                    }}
                  >
                    <EmailIcon color="primary" />
                    <Typography variant="body2" color="text.secondary">
                      techaffairs@iiitdm.ac.in
                    </Typography>
                  </Box>
                  <Box
                    component="li"
                    sx={{
                      mb: 2,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                    }}
                  >
                    <PhoneIcon color="primary" />
                    <Typography variant="body2" color="text.secondary">
                      +91 44 2747 5600
                    </Typography>
                  </Box>
                  <Box
                    component="li"
                    sx={{
                      mb: 2,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                    }}
                  >
                    <LocationOnIcon color="primary" />
                    <Typography variant="body2" color="text.secondary">
                      IIITDM Kancheepuram,<br />
                      Vandalur-Kelambakkam Road,<br />
                      Chennai - 600 127,<br />
                      Tamil Nadu, India
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary',
                  }}
                >
                  Connect With Us
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  Follow us on social media to stay updated with our latest events, achievements, and opportunities.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary',
                  }}
                >
                  Downloads
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyle: 'none',
                    p: 0,
                    m: 0,
                  }}
                >
                  {downloads.map((download) => (
                    <Box
                      component="li"
                      key={download.name}
                      sx={{
                        mb: 1,
                      }}
                    >
                      <Link
                        href={download.href}
                        color="text.secondary"
                        sx={{
                          textDecoration: 'none',
                          '&:hover': {
                            color: 'primary.main',
                          },
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <DownloadIcon color="primary" fontSize="small" />
                        {download.name}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' }, textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, sm: 0 } }}>
              © 2025 Technical Affairs, IIITDM Kancheepuram. All rights reserved.
            </Typography>
            <Box>
              <Link href="#" color="text.secondary" variant="body2" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }, mr: 2 }}>
                Privacy Policy
              </Link>
              <Link href="#" color="text.secondary" variant="body2" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Terms of Use
              </Link>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer; 