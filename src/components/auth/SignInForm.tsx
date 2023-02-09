import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Input from '../common/Input';
import { FaLock, FaUser } from 'react-icons/fa';
import { useEffect } from 'react';
import { signinUser, UserSignInRequest } from '../../features/users/usersAPI';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { authError, userInfo } = useAppSelector(({ users }) => ({
    authError: users.error,
    userInfo: users.userInfo,
  }));

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('아이디가 입력되지 않았습니다')
      .email('아이디는 이메일형식입니다'),
    password: Yup.string()
      .required('비밀번호가 입력되지 않았습니다')
      .min(6, '비밀번호는 최소 6자리 이상입니다')
      .max(40, '비밀번호는 최대 40자리 이하입니다'),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserSignInRequest>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: UserSignInRequest) => {
    dispatch(signinUser(data));
  };

  useEffect(() => {
    if (authError) {
      alert('로그인이 실패하였습니다');
      return;
    }
    if (userInfo) {
      navigate('/');
      return;
    }
  }, [authError, userInfo]);

  return (
    <LoginFormBlock>
      <h3>로그인</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={<FaUser />}
          flex
          id="email"
          type="email"
          autoComplete="email"
          placeholder="아이디"
          {...register('email')}
        />
        {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Input
          label={<FaLock />}
          flex
          id="password"
          type="password"
          autoComplete="password"
          placeholder="비밀번호"
          {...register('password')}
        />
        {errors?.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <LoginButton size="large-full" color="blue">
          로그인
        </LoginButton>
      </form>
      <Footer>
        <TinyLink to="/">아이디/비밀번호 찾기</TinyLink>
        <span>|</span>
        <TinyLink to="/register">회원가입</TinyLink>
      </Footer>
    </LoginFormBlock>
  );
};

const LoginFormBlock = styled.div`
  h3 {
    text-align: center;
    margin: 0;
    color: ${palette.blue9};
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-weight: bold;
  }
`;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.errorColor};
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const LoginButton = styled(Button)`
  margin-top: 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  a {
    color: ${palette.gray6};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray9};
    }
  }
`;

const TinyLink = styled(Link)`
  font-size: 0.95rem;
  text-decoration: none;
  &:hover,
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default LoginForm;
