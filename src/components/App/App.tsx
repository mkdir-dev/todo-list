import React from 'react';
import { Typography } from '@mui/material';

export const App: React.FC = () => (
  <div style={{ backgroundColor: '#000' }}>
    <Typography variant="h1" gutterBottom>
      h1. Heading
    </Typography>
    <Typography variant="h2" gutterBottom>
      h2. Heading
    </Typography>
    <Typography variant="subtitle1">
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
  </div>
);
