import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 600, padding: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Project Overview
      </Typography>
      <Typography variant="body1">
        Cryptocurrency Rates Viewer is a web application that displays cryptocurrency rates.
        This project is built with React, TypeScript, and Webpack and deployed on GitHub Pages.
        The app provides detailed information about various cryptocurrencies using routing for individual pages.
      </Typography>
    </Box>
  );
}

export default AboutPage;
