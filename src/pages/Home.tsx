// src/pages/Home.tsx
import React from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { Container, Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Home</Typography>
      <PostForm />
      <PostList />
    </Container>
  );
};

export default Home;
