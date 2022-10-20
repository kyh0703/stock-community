import { prototype } from 'events';
import React from 'react';
import styled from 'styled-components';
import theme from '../../themes/light';

type ColorType =
  | 'teal'
  | 'gray'
  | 'darkGray'
  | 'lightGray'
  | 'transparent'
  | 'red';

type ButtonSize = 'medium' | 'large';

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  // TODO 추후 컬러 추가
  // color?: ColorType;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({
  children,
  ref,
  // color = 'teal',
  size = 'medium',
  ...rest
}) => {
  const htmlProps = rest as any;
  return (
    <ButtonBlock
      size={size}
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
  size: ButtonSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  color: ${(props) => props.theme.buttonColor};
  background: ${(props) => props.theme.buttonBackgroundColor};
  border-radius: 4px;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.buttonHoverColor};
  }
`;

export default Button;
