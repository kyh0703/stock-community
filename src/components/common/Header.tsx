import React, { useState } from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import { FaSun } from 'react-icons/fa';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { themeActions } from '../../features/theme/themeSlice';
import Button from './Button';

interface Props {
  user?: {
    username: string;
  };
  onLogout?: () => void;
}

const Header = ({ user, onLogout }: Props) => {
  const { theme } = useAppSelector(({ theme }) => ({
    theme: theme.theme,
  }));
  const dispatch = useAppDispatch();

  // on toggle theme button event
  const onToggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (theme === 'dark') {
      dispatch(themeActions.enableLightMode());
    } else {
      dispatch(themeActions.enableDarkMode());
    }
  };

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Right>
            <Items>
              <Item>
                <Link to="/">Home</Link>
              </Item>
              <Item>
                <Link to="/posts">게시글</Link>
              </Item>
              <Item>
                <Link to="/write">임시용 쓰기 페이지 접근</Link>
              </Item>
              <Item>
                <Button onClick={onToggleTheme}>테마를 변경해보자</Button>
              </Item>
            </Items>
          </Right>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

const HeaderBlock = styled.div`
  position: fixed;
  height: 4rem;
  width: 100%;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.headerColor};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.headerHoverColor};
  }
`;

const UserInfo = styled.div`
  margin-right: 1rem;
  font-weight: 800;
`;

const Spacer = styled.div`
  height: 4rem;
`;

export default Header;
