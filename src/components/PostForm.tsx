 // src/components/PostForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/posts/postsSlice';
// import { v4 as uuidv4 } from 'uuid';
import {v4 as uuidv4} from 'uuid'
import { Button, TextField } from '@mui/material';

const PostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addPost({ id: uuidv4(), title, content, comments: [] }));
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Title" value={title} onChange={e => setTitle(e.target.value)} fullWidth margin="normal" />
      <TextField label="Content" value={content} onChange={e => setContent(e.target.value)} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">Add Post</Button>
    </form>
  );
};

export default PostForm;
