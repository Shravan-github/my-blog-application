// src/pages/About.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>About</Typography>
      <Typography variant="body1">This is a simple blog application built with React, Redux, TypeScript, and Material-UI.</Typography>
    </Container>
  );
};

export default About;
