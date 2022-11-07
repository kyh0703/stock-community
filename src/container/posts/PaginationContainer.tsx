import React from 'react';
import { useSearchParams } from 'react-router-dom';

const PaginationContainer = () => {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get('tag');
  const page = Number(searchParams.get('page')) || 1;

  return <div></div>;
};

export default PaginationContainer;
