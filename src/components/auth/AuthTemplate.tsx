import React from 'react';
import styled from 'styled-components';

const AuthTemplateContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
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
  border: 1px solid ${(props) => props.theme.bodyContentBorderColor};
  padding: 2rem;
  width: 460px;
  color: ${(props) => props.theme.bodyContentColor};
  background: ${(props) => props.theme.bodyContentBackgroundColor};
  border-radius: 10px;
`;

const AuthTemplate: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  children,
}) => {
  return (
    <AuthTemplateContainer>
      <AuthBox>{children}</AuthBox>
    </AuthTemplateContainer>
  );
};

export default AuthTemplate;
