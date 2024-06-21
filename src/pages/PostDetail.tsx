// src/pages/PostDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Container, Typography } from '@mui/material';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = useSelector((state: RootState) => state.posts.posts.find(p => p.id === postId));

  if (!post) {
    return <Typography variant="h5">Post not found</Typography>;
  }

  return (
    <Container>
      <Typography variant="h2" gutterBottom>{post.title}</Typography>
      <Typography variant="body1" paragraph>{post.content}</Typography>
      <CommentList comments={post.comments} />
      <CommentForm postId={post.id} />
    </Container>
  );
};

export default PostDetail;
