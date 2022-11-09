import qs from 'qs';
import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

interface PaginationProps {
  page: number;
  lastPage: number;
  tag: string;
}

const buildLink = (username: string, tag: string, page: number) => {
  const query = qs.stringify({ tag, page });
  return username ? `/@${username}?${query}` : `/?${query}`;
};

const Pagination = ({ page, lastPage, tag }: PaginationProps) => (
  <PaginationBlock>
    <Button
      disabled={page === 1}
      to={page === 1 ? undefined : buildLink('test', tag, page - 1)}
    >
      이전
    </Button>
    <PageNumber>{page}</PageNumber>
    <Button
      disabled={page === lastPage}
      to={page === lastPage ? undefined : buildLink('test', tag, page + 1)}
    >
      다음
    </Button>
  </PaginationBlock>
);

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const PageNumber = styled.div`
  font-weight: bold;
`;

export default Pagination;
