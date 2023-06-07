import React, { ReactElement, forwardRef } from 'react';

import { InputContainer, InputField, InputLabel } from './input.styles';

interface InputProps
  extends React.PropsWithRef<JSX.IntrinsicElements['input']> {
  id: string;
  label?: string | ReactElement;
  flex?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, flex = false, ...rest }, ref) => {
    return (
      <InputContainer flex={flex}>
        {label && (
          <InputLabel flex={flex} htmlFor={id}>
            {label}
          </InputLabel>
        )}
        <InputField id={id} ref={ref} {...rest} />
      </InputContainer>
    );
  },
);

export default Input;
