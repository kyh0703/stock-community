import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { form } = useAppSelector(({ auth }) => ({ form: auth.register }));

  // Input 변경 이벤트 핸들러
  const onChange = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (!e) return;
    const { value, name } = e.target;
  };

  // form 등록 이벤트 핸들러
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterForm;
