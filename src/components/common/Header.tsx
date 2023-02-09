import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Responsive from './Responsive';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useAppDispatch } from '../../app/hooks';
import { themeActions } from '../../features/theme/themeSlice';
import storage from '../../lib/storage';
import { UserInfo } from '../../features/users/usersSlice';
import Button from './Button';
import PlainNavLink from './PlainNavLink';
import palette from '../../lib/styles/palette';

interface HeaderProps {
  user: UserInfo;
  onLogout?: () => void;
}

const Header = ({ user, onLogout }: HeaderProps) => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
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

  const onToggleMenu = () => {
    setMenuOpen((state) => !state);
  };

  return (
    <>
      <HeaderBlock>
        <MobileMenuIcon onClick={onToggleMenu}>
          <div />
          <div />
          <div />
        </MobileMenuIcon>
        <Menu open={menuOpen}>
          <StyledMenuItem to="/" isActive={pathname === '/'}>
            Home
          </StyledMenuItem>
          <StyledMenuItem to="/posts" isActive={pathname === '/posts'}>
            Post
          </StyledMenuItem>
          {user ? (
            <>
              <StyleUserName>{user.email}</StyleUserName>
              <AuthButton onClick={onLogout} color={menuOpen ? 'none' : 'teal'}>
                Logout
              </AuthButton>
            </>
          ) : (
            <AuthButton to="/signin" color={menuOpen ? 'none' : 'violet'}>
              Login
            </AuthButton>
          )}
          <ThemeLogoWrapper>
            {theme === 'dark' ? (
              <FaMoon onClick={onToggleTheme} />
            ) : (
              <FaSun onClick={onToggleTheme} />
            )}
          </ThemeLogoWrapper>
        </Menu>
      </HeaderBlock>
      <Spacer open={menuOpen} />
    </>
  );
};

const HeaderBlock = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.headerBackgroundColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  font-size: 1.25rem;
`;

const Menu = styled.nav<{
  open: boolean;
}>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  font-family: 'Kaushan Script';
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  height: 10rem;
  width: 100%;
  top: 4rem;
  left: 0;
  box-sizing: border-box;
  background: ${(props) => props.theme.bodyContentBackgroundColor};
  border-bottom: 3px solid ${(props) => props.theme.bodyContentBorderColor};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  // 브라우저 768px < current
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background: none;
    left: initial;
    height: initial;
    top: initial;
    width: 100%;
    position: relative;
    border-bottom: none;
    border-bottom-right-radius: none;
    border-bottom-left-radius: none;

    > * {
      margin-right: 1.5rem;
    }
  }
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 3rem;
  min-width: 3rem;
  padding: 5px;

  > div {
    height: 3px;
    background: ${(props) => props.theme.bodyColor};
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const ThemeLogoWrapper = styled.div`
  cursor: pointer;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    background-color: ${(props) => props.theme.headerColor};
  }

  &:active {
    outline: 0;
  }
`;

const StyledMenuItem = styled(PlainNavLink)`
  &.active {
    color: ${(props) => props.theme.headerHoverColor};
  }
`;

const StyleUserName = styled.div`
  margin-right: 1rem;
  font-weight: 800;
`;

const AuthButton = styled(Button)`
  font-size: 1.125rem;
`;

const Spacer = styled.div<{ open: boolean }>`
  height: ${(props) => (props.open ? '14rem' : '4rem')};
`;

export default Header;
