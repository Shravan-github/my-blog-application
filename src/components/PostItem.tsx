// src/components/PostItem.tsx
import React from 'react';
import { Post } from '../features/posts/Post';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body1">{post.content}</Typography>
        <Button component={Link} to={`/posts/${post.id}`} variant="contained" color="primary">
          View Post
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostItem;
