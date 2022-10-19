import React from 'react';
import styled from 'styled-components';

interface HeaderLogoProps {
  custom: boolean;
  username: string | null;
}

const HeaderLogo = ({ custom, username }: HeaderLogoProps) => {
  return <HeaderLogoBlack></HeaderLogoBlack>;
};

const HeaderLogoBlack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${(props) => props.theme.LogoColor};
  font-size: 1.3125rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export default HeaderLogo;
