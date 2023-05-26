import styled, { css } from 'styled-components';

import palette from '../../../lib/styles/palette';

export const InputContainer = styled.div<{ flex: boolean }>`
  ${(props) =>
    props.flex &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export const InputLabel = styled.label<{ flex: boolean }>`
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
  ${(props) =>
    props.flex &&
    css`
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    `}
`;

export const InputField = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray4};
  border-radius: 5px;
  padding: 0.5rem;
  outline: none;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 1em;
  &:focus {
    color: ${palette.blue6};
    border-bottom: 1px solid ${palette.blue6};
  }
`;
