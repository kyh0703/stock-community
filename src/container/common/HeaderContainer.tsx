import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import Header from '../../components/common/Header';

const HeaderContainer = () => {
  // const { user } = useAppSelector(({ user }) => user.user);
  const dispatch = useAppDispatch();
  const onLogout = () => {};
  return <Header onLogout={onLogout} />;
};

export default HeaderContainer;
