import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

const PaginationContainer = () => {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get('tag');
  const page = Number(searchParams.get('page')) || 1;

  const { lastPage, posts, loading } = useAppSelector(({ posts }) => ({
    lastPage: posts.list.lastPage,
    posts: posts.list.posts,
    loading: posts.loading,
  }));

  if (!posts || loading) return null;
  return <div></div>;
};

export default PaginationContainer;
