import React, { HTMLProps } from 'react';
import styled, { css } from 'styled-components';
import PlainNavLink from './PlainNavLink';
import { AppDispatch } from '../../app/store';
import palette from '../../lib/styles/palette';

type StyleNavLinkProps = HTMLProps<HTMLAnchorElement> & {
  to: string;
  isActive?: boolean;
};

const StyledNavLink: React.FC<StyleNavLinkProps> = ({
  to,
  isActive,
  children,
}) => (
  <StyledNavLinkBlock
    to={to}
    isActive={isActive}
    activeStyle={{ color: palette.owlOrange }}
  >
    {children}
  </StyledNavLinkBlock>
);

const StyledNavLinkBlock = styled(PlainNavLink)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default StyledNavLink;
