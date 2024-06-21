// src/components/CommentList.tsx
import React from 'react';
import { Comment } from '../features/posts/Post';
import { List, ListItem, ListItemText } from '@mui/material';

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <List>
      {comments.map(comment => (
        <ListItem key={comment.id}>
          <ListItemText primary={comment.content} />
        </ListItem>
      ))}
    </List>
  );
};

export default CommentList;
