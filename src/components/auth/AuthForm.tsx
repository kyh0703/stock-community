import { format } from 'path';
import React, { FormEventHandler } from 'react';
import { Form } from 'react-router-dom';
import styled from 'styled-components';

const AuthFormBlock = styled.div``;

const StyledInput = styled.input``;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.errorMessage};
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const ButtonWithMarginTop = styled.button`
  margin-top: 1rem;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

interface Props {
  type: 'login' | 'register';
  onSubmit: () => void;
  error: null | string;
}

const AuthForm = ({ type, onSubmit, error }: Props) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
    </AuthFormBlock>
  );
};

export default AuthForm;
