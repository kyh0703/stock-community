import styled from 'styled-components';
import PlainNavLink from '../../link/plain-nav-link.component';

export const HeaderContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.headerBackgroundColor};
  font-size: 1.25rem;
  margin-bottom: 30px;
`;

export const LogoWrapper = styled(PlainNavLink)`
  height: 100%;
  width: 1.5rem;
  padding: 1rem;
`;

export const NavLinkContainer = styled.nav<{
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

export const StyledNavLink = styled(PlainNavLink)`
  padding: 10px 15px;

  &.active {
    color: ${(props) => props.theme.headerHoverColor};
  }
`;

export const ThemeLogoWrapper = styled.div`
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
