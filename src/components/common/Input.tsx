import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string | ReactElement;
  flex?: boolean;
}

const Input: React.FC<InputProps> = ({ id, label, flex = false, ...rest }) => {
  return (
    <InputWrap flex={flex}>
      {label && (
        <InputLabel htmlFor={id} flex={flex}>
          {label}
        </InputLabel>
      )}
      <InputField id={id} {...rest} />
    </InputWrap>
  );
};

const InputWrap = styled.div<{ flex: boolean }>`
  ${(props) =>
    props.flex &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

const InputField = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray4};
  border-radius: 5px;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  &:focus {
    color: ${palette.blue6};
    border-bottom: 1px solid ${palette.blue6};
  }
`;

const InputLabel = styled.label<{ flex: boolean }>`
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
  ${(props) =>
    props.flex &&
    css`
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    `}
`;

export default Input;
