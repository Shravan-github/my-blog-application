// src/features/posts/postsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, Comment } from './Post';

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },
    addComment(state, action: PayloadAction<{ postId: string; comment: Comment }>) {
      const { postId, comment } = action.payload;
      const post = state.posts.find(post => post.id === postId);
      if (post) {
        post.comments.push(comment);
      }
    },
  },
});

export const { addPost, addComment } = postsSlice.actions;

export default postsSlice.reducer;
