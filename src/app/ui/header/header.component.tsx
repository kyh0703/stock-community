import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

import { useAppDispatch } from '../../app/hooks';
import storage from '../../lib/storage';
import { themeActions } from '@features/theme/reducer/theme.slice';
import { ReactComponent as CrownLogo } from '../../asserts/crown.svg';

import {
  HeaderContainer,
  LogoWrapper,
  NavLinkContainer,
  StyledNavLink,
  ThemeLogoWrapper,
} from './header.styles';

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

  // On toggle theme button event
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
