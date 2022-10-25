import { format } from 'path';
import React, { FormEventHandler } from 'react';
import { Form } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const textMap = {
  login: '로그인',
  register: '회원가입',
};

interface Form {
  email: string;
  username?: string;
  password: string;
  passwordConfirm?: string;
}

interface AuthFormProps {
  type: 'login' | 'register';
  onChange: (e: React.ChangeEvent<HTMLInputElement> | null) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: null | string;
  form: Form;
}

const AuthForm = ({ type, form, onChange, onSubmit, error }: AuthFormProps) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="email"
          name="email"
          placeholder="아이디"
          value={form.email}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder="이름"
            value={form.username}
          />
        )}
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
    </AuthFormBlock>
  );
};

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: blue;
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray1};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: yellow;
    border-bottom: 1px solid red;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.errorColor};
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const ButtonWithMarginTop = styled.button`
  margin-top: 1rem;
`;

export default AuthForm;
