import qs from 'qs';
import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

interface PaginationProps {
  page: number;
  lastPage: number;
  username: string;
  tag: string;
}

const buildLink = (username: string, tag: string, page: number) => {
  const query = qs.stringify({ tag, page });
  return username ? `/@${username}?${query}` : `/?${query}`;
};

const Pagination = ({ page, lastPage, username, tag }: PaginationProps) => {
  return (
    <PaginationBlock>
      <Button disabled={page === 1}>이전</Button>
      <PageNumber>{page}</PageNumber>
      <Button disabled={page === lastPage}>다음</Button>
    </PaginationBlock>
  );
};

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const PageNumber = styled.div``;

export default Pagination;
