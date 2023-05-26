import styled from 'styled-components';

import { Link } from 'react-router-dom';
import palette from '../../../../lib/styles/palette';
import Button from '../../../../components/common/Button';

export const SignInFormContainer = styled.div`
  h3 {
    text-align: center;
    margin: 0;
    color: ${palette.blue9};
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-weight: bold;
  }
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.errorColor};
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

export const SignInButton = styled(Button)`
  margin-top: 1rem;
`;

export const Footer = styled.div`
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

export const TinyLink = styled(Link)`
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
