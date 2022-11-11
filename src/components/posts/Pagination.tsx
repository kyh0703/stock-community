import qs from 'qs';
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

interface PaginationProps {
  page: number;
  totalPage: number;
  limit?: number;
  tag: string;
}

const Pagination = ({ page, totalPage, limit = 10, tag }: PaginationProps) => {
  // NOTE (pagination example)
  // current_page = 1
  // view_page_limit = 20
  // total_post = 462
  // total_page = Math.ceil(total_post/view_page_limit)
  // view_page_group = Math.ceil(current_page/view_page_limit)
  // view_last_page = view_page_group * view_page_limit
  // view_first_page = view_page_limit - (view_page_limit - 1)

  // 게시물 개수 462
  // 총페이지 수 math.ceil(462/20) = 23
  // 화면에 보여질 페이지 그룹 Math.ceil(1/limit) = 1
  // 화면에 그려질 마지막 페이지: 1. * limit = 10
  // 화면에 그려질 첫번째 페이지: 10 = limit -1 = 1
  const pageGroup = Math.ceil(page / limit);
  let lastPage = pageGroup * limit;
  if (lastPage > totalPage) lastPage = totalPage;
  const firstPage = lastPage - (limit - 1) <= 0 ? 1 : lastPage - (limit - 1);
  const pageNumberArr = range(firstPage, lastPage);

  return (
    <>
      <PaginationBlock>
        <Button
          disabled={page === 1}
          color="indigo"
          to={page === 1 ? undefined : buildLink('test', tag, page - 1)}
        >
          이전
        </Button>
        {pageNumberArr && (
          <div>
            {pageNumberArr.map((num) => (
              <PageNumberItem
                curPage={page}
                page={num}
                tag={tag}
                username={'test'}
              />
            ))}
          </div>
        )}
        <Button
          disabled={page === lastPage}
          color="indigo"
          to={page === lastPage ? undefined : buildLink('test', tag, page + 1)}
        >
          다음
        </Button>
      </PaginationBlock>
    </>
  );
};

interface PageNumberItemProps {
  curPage: number;
  page: number;
  tag: string;
  username: string;
}

const PageNumberItem = ({
  curPage,
  page,
  tag,
  username,
}: PageNumberItemProps) => {
  const isActive = curPage === page;
  return (
    <PageNumber
      key={page}
      to={buildLink(username, tag, page)}
      className={isActive ? 'active' : 'inactive'}
    >
      {page}
    </PageNumber>
  );
};

const range = (start: number, end: number) => {
  const isReverse = start > end;
  const targetLength = isReverse ? start - end + 1 : end - start + 1;
  const arr = new Array(targetLength);
  const b = Array.apply(null, arr);
  const result = b.map((discard, n) => {
    return isReverse ? n + end : n + start;
  });
  return isReverse ? result.reverse() : result;
};

const buildLink = (username: string, tag: string, page: number) => {
  const query = qs.stringify({ tag, page });
  return username ? `/@${username}?${query}` : `/?${query}`;
};

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const PageNumber = styled(Link)`
  margin-left: 0.5rem;
  color: ${palette.gray7};
  &.active {
    color: ${palette.owlGreen};
  }
  font-weight: bold;
  &:hover {
    color: ${palette.owlRed};
  }
`;

export default Pagination;
