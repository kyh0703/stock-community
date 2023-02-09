import React from 'react';
import RegisterForm from '../../components/auth/SignUpForm';
import LoginForm from '../../components/auth/SignInForm';
import AuthTemplate from '../../components/auth/AuthTemplate';

interface Props {
  authType: 'signin' | 'signup';
}

const AuthContainer = ({ authType }: Props) => {
  return (
    <AuthTemplate>
      {authType === 'signin' ? <LoginForm /> : <RegisterForm />}
    </AuthTemplate>
  );
};

export default AuthContainer;
