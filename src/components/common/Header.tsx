import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useAppDispatch } from '../../app/hooks';
import { themeActions } from '../../features/theme/themeSlice';
import storage from '../../lib/storage';
import { UserInfo } from '../../features/users/usersSlice';
import Button from './Button';

interface HeaderProps {
  user: UserInfo;
  onLogout?: () => void;
}

const Header = ({ user, onLogout }: HeaderProps) => {
  const theme = storage.getItem('theme');
  const dispatch = useAppDispatch();
  // on toggle theme button event
  const onToggleTheme = (e: React.MouseEvent<HTMLOrSVGElement>) => {
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
              {user ? (
                <>
                  <StyleUserName>{user.username}</StyleUserName>
                  <AuthButton onClick={onLogout}>로그아웃</AuthButton>
                </>
              ) : (
                <AuthButton to="/login">로그인</AuthButton>
              )}
              <Item>
                <ThemeLogoWrapper>
                  {theme === 'dark' ? (
                    <FaMoon onClick={onToggleTheme} />
                  ) : (
                    <FaSun onClick={onToggleTheme} />
                  )}
                </ThemeLogoWrapper>
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
  background-color: ${(props) => props.theme.headerBackgroundColor};
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
  font-size: 1.125rem;
  &:hover {
    color: ${(props) => props.theme.headerHoverColor};
  }
`;

const ThemeLogoWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3125rem;
  border-radius: 50%;
  &:hover {
    background-color: ${(props) => props.theme.headerColor};
  }
`;

const StyleUserName = styled.div`
  margin-right: 1rem;
  font-weight: 800;
`;

const AuthButton = styled(Button)`
  margin-right: 1rem;
  font-size: 1.125rem;
`;

const Spacer = styled.div`
  height: 4rem;
`;

export default Header;
