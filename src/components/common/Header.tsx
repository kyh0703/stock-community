import React, { useState } from 'react';
import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useAppDispatch } from '../../app/hooks';
import { themeActions } from '../../features/theme/themeSlice';
import storage from '../../lib/storage';
import { ReactComponent as CrownLogo } from '../../asserts/crown.svg';
import PlainNavLink from './PlainNavLink';

const HeaderContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.headerBackgroundColor};
  font-size: 1.25rem;
  margin-bottom: 30px;
`;

const LogoWrapper = styled(PlainNavLink)`
  height: 100%;
  width: 1.5rem;
  padding: 1rem;
`;

const NavLinkContainer = styled.nav<{
  open: boolean;
}>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /* /* background: ${(props) =>
    props.theme.bodyContentBackgroundColor}; border-bottom: 3px solid ${(
    props,
  ) => props.theme.bodyContentBorderColor};
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
  } */
`;

const StyledNavLink = styled(PlainNavLink)`
  padding: 10px 15px;

  &.active {
    color: ${(props) => props.theme.headerHoverColor};
  }
`;

const ThemeLogoWrapper = styled.div`
  cursor: pointer;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px 15px;

  &:hover {
    background-color: ${(props) => props.theme.headerColor};
  }
  &:active {
    outline: 0;
  }
`;

interface HeaderProps {
  onLogout?: () => void;
}

const Header = ({ onLogout }: HeaderProps) => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // 임시코드
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);

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
      <HeaderContainer>
        <LogoWrapper to="/">
          <CrownLogo />
        </LogoWrapper>
        <NavLinkContainer open={menuOpen}>
          <StyledNavLink to="/posts" isActive={pathname === '/post'}>
            POST
          </StyledNavLink>
          <StyledNavLink to="/signin">SIGN IN</StyledNavLink>
          <StyledNavLink to="/signup">SIGN UP</StyledNavLink>
          <ThemeLogoWrapper>
            {theme === 'dark' ? (
              <FaMoon onClick={onToggleTheme} />
            ) : (
              <FaSun onClick={onToggleTheme} />
            )}
          </ThemeLogoWrapper>
        </NavLinkContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
