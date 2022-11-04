import React from 'react';
import styled, { css } from 'styled-components';
import { buttonColorMap } from '../../lib/styles/palette';

type ColorType = 'teal' | 'gray' | 'blue' | 'red' | 'cyan';
type ButtonSize = 'medium' | 'large';

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  // TODO 추후 컬러 추가
  color?: ColorType;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({
  children,
  ref,
  color = 'teal',
  size = 'medium',
  ...rest
}) => {
  const htmlProps = rest as any;
  return (
    <ButtonBlock
      color={color}
      size={size}
      {...htmlProps}
      onClick={(e) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        (e.target as HTMLButtonElement).blur();
      }}
    >
      {children}
    </ButtonBlock>
  );
};

const ButtonBlock = styled.button<{
  color: ColorType;
  size: ButtonSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  color: ${(props) => buttonColorMap[props.color].color};
  background: ${(props) => buttonColorMap[props.color].background};
  border-radius: 4px;
  &:hover,
  &:focus {
    color: ${(props) => buttonColorMap[props.color].hoverBackground};
  }

  ${(props) =>
    props.size === 'medium' &&
    css`
      height: 2rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      font-size: 1rem;
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      height: 2.5rem;
      padding-left: 1.125rem;
      padding-right: 1.125rem;
      & + & {
        margin-left: 0.875rem;
      }
      font-size: 1.125rem;
    `}
`;

export default Button;
