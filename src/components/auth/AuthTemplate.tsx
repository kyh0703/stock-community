import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import { themeActions } from '../../features/theme/themeSlice';

const AuthTemplate: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  children,
}) => {
  return (
    <AuthTemplateBlock>
      <AuthBox>{children}</AuthBox>
    </AuthTemplateBlock>
  );
};

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
  padding: 2rem;
  width: 360px;
  color: ${(props) => props.theme.bodyContentColor};
  background: ${(props) => props.theme.bodyContentBackgroundColor};
  border-radius: 10px;
`;

export default AuthTemplate;
