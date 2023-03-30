import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Header from '../../components/common/Header';
import { signoutUser } from '../../features/auth/authAPI';
import { UserInfo } from '../../features/auth/authSlice';

const HeaderContainer = () => {
  const user = useAppSelector(({ users }) => users.userInfo) as UserInfo;
  const dispatch = useAppDispatch();
  const onLogout = () => {
    dispatch(signoutUser());
  };

  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
