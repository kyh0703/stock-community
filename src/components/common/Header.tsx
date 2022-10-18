import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  margin-right: 1rem;
  font-weight: 800;
`;

interface Props {
  user?: {
    username: string;
  };
  onLogout?: () => void;
}

const Header = ({ user, onLogout }: Props) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            Home
          </Link>
          <Link to="/" className="logo">
            Community
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <button onClick={onLogout}>로그아웃</button>
            </div>
          ) : (
            <div className="right">
              <button>로그인</button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
    </>
  );
};

export default Header;
