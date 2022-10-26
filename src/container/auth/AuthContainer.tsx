import React from 'react';
import RegisterForm from '../../components/auth/RegisterForm';
import LoginForm from '../../components/auth/LoginForm';
import AuthTemplate from '../../components/auth/AuthTemplate';

interface AuthContainerProps {
  authType: 'login' | 'register';
}

const AuthContainer = ({ authType }: AuthContainerProps) => {
  return (
    <AuthTemplate>
      {authType === 'login' ? <LoginForm /> : <RegisterForm />}
    </AuthTemplate>
  );
};

export default AuthContainer;
