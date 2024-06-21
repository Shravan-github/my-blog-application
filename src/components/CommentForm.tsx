// src/components/CommentForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../features/posts/postsSlice';
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from '@mui/material';

interface CommentFormProps {
  postId: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId }) => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addComment({ postId, comment: { id: uuidv4(), content } }));
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Comment" value={content} onChange={e => setContent(e.target.value)} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">Add Comment</Button>
    </form>
  );
};

export default CommentForm;
