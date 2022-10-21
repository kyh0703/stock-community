import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //const { post } = useAppSelector((state) => state.posts.post);

  // Input 변경 이벤트 핸들러
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
  };

  // form 등록 이벤트 핸들러
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return <div></div>;
};

export default RegisterForm;
