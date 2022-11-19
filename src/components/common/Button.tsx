import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette, { buttonColorMap } from '../../lib/styles/palette';
import PlainNavLink from './PlainNavLink';

type ColorType =
  | 'none'
  | 'teal'
  | 'gray'
  | 'red'
  | 'cyan'
  | 'blue'
  | 'orange'
  | 'violet'
  | 'indigo';

type ButtonSize = 'small' | 'medium' | 'large' | 'large-full';

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
    <StyledLink
      to={to}
      color={color}
      size={size}
      disabled={disabled}
      {...htmlProps}
      onClick={(event) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(event);
        }
        (event.target as HTMLAnchorElement).blur();
      }}
    >
      {children}
    </StyledLink>
  ) : (
    <StyledButton
      color={color}
      size={size}
      disabled={disabled}
      {...htmlProps}
      onClick={(event) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(event);
        }
        (event.target as HTMLButtonElement).blur();
      }}
    >
      {children}
    </StyledButton>
  );
};

const ButtonSizeStyles = ({ size = 'medium' }: { size: ButtonSize }) => {
  switch (size) {
    case 'small':
      return css`
        height: 1.5rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        font-size: 1rem;
      `;
    case 'large':
      return css`
        height: 2.5rem;
        padding-left: 1.125rem;
        padding-right: 1.125rem;
        & + & {
          margin-left: 0.875rem;
        }
        font-size: 1.125rem;
      `;
    case 'large-full':
      return css`
        height: 2.5rem;
        padding-left: 1.125rem;
        padding-right: 1.125rem;
        & + & {
          margin-left: 0.875rem;
        }
        font-size: 1.125rem;
        width: 100%;
      `;
    case 'medium':
      return css`
        height: 2rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        font-size: 1rem;
      `;
  }
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

  ${ButtonSizeStyles}

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

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  ${buttonStyle};
`;

export default Button;
