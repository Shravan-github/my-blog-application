// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box mt={5} py={3} bgcolor="primary.main" color="white">
      <Typography variant="body1" align="center">
        &copy; {new Date().getFullYear()}Shravan Sunkari it is My Blog. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
