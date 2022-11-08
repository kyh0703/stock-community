import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette, { buttonColorMap } from '../../lib/styles/palette';

type ColorType = 'teal' | 'gray' | 'blue' | 'red' | 'cyan';
type ButtonSize = 'medium' | 'large';

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  to?: string;
  color?: ColorType;
  size?: ButtonSize;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  ref,
  to,
  color = 'teal',
  size = 'medium',
  disabled = false,
  ...rest
}) => {
  const htmlProps = rest as any;
  return to ? (
    <StyledNav
      to={to}
      color={color}
      size={size}
      disabled={disabled}
      {...htmlProps}
      onClick={(e) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        (e.target as HTMLAnchorElement).blur();
      }}
    >
      {children}
    </StyledNav>
  ) : (
    <StyledButton
      color={color}
      size={size}
      disabled={disabled}
      {...htmlProps}
      onClick={(e) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        (e.target as HTMLButtonElement).blur();
      }}
    >
      {children}
    </StyledButton>
  );
};

const buttonStyle = css<{
  color: ColorType;
  size: ButtonSize;
  disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;

  color: ${(props) => buttonColorMap[props.color].color};
  background: ${(props) => buttonColorMap[props.color].background};
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

  ${(props) =>
    props.disabled &&
    css`
      background: ${palette.gray3};
      color: ${palette.gray5};
      cursor: not-allowed;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledNav = styled(Link)`
  text-decoration: none;
  ${buttonStyle};
`;

export default Button;
