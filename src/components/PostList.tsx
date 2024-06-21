// src/components/PostList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import PostItem from './PostItem';

const PostList: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);

  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
