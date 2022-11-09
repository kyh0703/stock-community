import React from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import Pagination from '../../components/posts/Pagination';

const PaginationContainer = () => {
  const [searchParams] = useSearchParams();
  const { username } = useParams();
  const tag = searchParams.get('tag');
  const page = Number(searchParams.get('page')) || 1;
  const { lastPage, posts, loading } = useAppSelector(({ posts }) => ({
    lastPage: posts.list.lastPage,
    posts: posts.list.posts,
    loading: posts.loading,
  }));

  if (!posts || loading) return null;
  return <Pagination tag={tag + ''} page={page} lastPage={lastPage} />;
};

export default PaginationContainer;
