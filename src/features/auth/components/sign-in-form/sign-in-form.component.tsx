import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import Input from '../../../../components/common/Input';
import { FaLock, FaUser } from 'react-icons/fa';
import { useEffect } from 'react';
import { signinUser, AuthSigninRequest } from '../../api/auth.api';

import {
  SignInFormContainer,
  SignInButton,
  ErrorMessage,
  Footer,
  TinyLink,
} from './sign-up-form.styles';

const SignInForm = () => {
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
  } = useForm<AuthSigninRequest>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: AuthSigninRequest) => {
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
    <SignInFormContainer>
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
        <SignInButton size="large-full" color="blue">
          로그인
        </SignInButton>
      </form>
      <Footer>
        <TinyLink to="/">아이디/비밀번호 찾기</TinyLink>
        <span>|</span>
        <TinyLink to="/signup">회원가입</TinyLink>
      </Footer>
    </SignInFormContainer>
  );
};

export default SignInForm;
