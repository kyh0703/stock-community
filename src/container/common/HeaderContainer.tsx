import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Header from '../../components/common/Header';
import { logoutUser } from '../../features/users/usersAPI';
import { UserInfo } from '../../features/users/usersSlice';

const HeaderContainer = () => {
  const user = useAppSelector(({ users }) => users.userInfo) as UserInfo;
  const dispatch = useAppDispatch();
  const onLogout = () => {
    dispatch(logoutUser());
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
