import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Input from '../common/Input';
import { useEffect } from 'react';
import {
  registerUser,
  UserRegisterRequest,
} from '../../features/users/usersAPI';

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userToken, authError, success } = useAppSelector(({ users }) => ({
    userToken: users.userAuth?.token,
    authError: users.error,
    success: users.success,
  }));

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('아이디가 입력되지 않았습니다')
      .email('아이디는 이메일형식입니다'),
    username: Yup.string()
      .required('이름이 입력되지 않았습니다')
      .min(2, '이름은 최소 2자리 이상입니다')
      .max(20, '이름은 최대 20자리 이하입니다'),
    password: Yup.string()
      .required('비밀번호가 입력되지 않았습니다')
      .min(6, '패스워드는 최소 6자리 이상입니다')
      .max(40, '패스워드는 최대 20자리 이하입니다'),
    passwordConfirm: Yup.string()
      .required('비밀번호 확인이 입력되지 않았습니다')
      .oneOf([Yup.ref('password'), null], '비밀번호가 일치 하지 않습니다'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserRegisterRequest>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: UserRegisterRequest) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (authError) {
      alert(`회원가입이 실패하였습니다\n${authError}`);
      return;
    }
    if (success) {
      alert(`회원가입이 성공하였습니다`);
      // TODO login 처리를 바로?
      navigate('/login');
    }
  }, [authError, success]);

  const onCancel = () => {
    navigate('/');
  };

  return (
    <RegisterFormBlock>
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="아이디"
          id="email"
          type="email"
          autoComplete="email"
          {...register('email')}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Input
          label="이름"
          id="username"
          type="username"
          {...register('username')}
        />
        {errors.username && (
          <ErrorMessage>{errors.username.message}</ErrorMessage>
        )}
        <Input
          label="비밀번호"
          id="password"
          type="password"
          autoComplete="new-password"
          {...register('password')}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <Input
          label="비밀번호 재확인"
          id="passwordConfirm"
          type="password"
          autoComplete="new-password"
          {...register('passwordConfirm')}
        />
        {errors.passwordConfirm && (
          <ErrorMessage>{errors.passwordConfirm.message}</ErrorMessage>
        )}
        <RegisterButtonWrap>
          <RegisterButton color="teal" type="submit">
            회원가입
          </RegisterButton>
          <RegisterButton color="red" onClick={onCancel}>
            돌아가기
          </RegisterButton>
        </RegisterButtonWrap>
      </form>
      <Footer>
        <Link to="/login">로그인</Link>
      </Footer>
    </RegisterFormBlock>
  );
};

const RegisterFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.cyan8};
    margin-bottom: 1rem;
    font-size: 1.125rem;
    text-align: center;
    font-weight: bold;
  }
`;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.errorColor};
  text-align: center;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const RegisterButtonWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const RegisterButton = styled(Button)`
  margin-top: 1rem;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray6};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray9};
    }
  }
`;

export default RegisterForm;
