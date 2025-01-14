import { css } from '@emotion/react';
import React, { forwardRef, RefAttributes } from 'react';

import stylin from '@/stylin';

import Box from '../box';
import { InputProps } from './input.types';
import { InputFieldProps } from './input.types';

const Input = forwardRef(
  (
    {
      Prefix,
      Suffix,
      shieldProps,
      onClickPrefix,
      onClickSuffix,
      ...props
    }: InputProps,
    ref
  ) => {
    const InputField = stylin<InputFieldProps & RefAttributes<unknown>>(
      'input'
    )(
      css({
        width: '100%',
        height: '100%',
        border: 'none',
        outline: 'none',
        background: 'transparent',
        overflow: 'hidden',
        '&:-internal-autofill-selected': {
          background: 'transparent',
        },
        '&:focus-visible': {
          outline: 'none',
        },
      })
    );

    return (
      <Box display="flex" overflow="hidden" {...shieldProps}>
        {Prefix && (
          <Box
            display="flex"
            alignItems="center"
            onClick={onClickPrefix}
            {...(onClickPrefix && { cursor: 'pointer' })}
          >
            {Prefix}
          </Box>
        )}
        <Box flex="1">
          <InputField px="L" color="text" ref={ref} {...props} />
        </Box>
        {Suffix && (
          <Box
            display="flex"
            minWidth="3rem"
            alignItems="center"
            justifyContent="center"
            onClick={onClickSuffix}
            {...(onClickSuffix && { cursor: 'pointer' })}
          >
            {Suffix}
          </Box>
        )}
      </Box>
    );
  }
);

Input.displayName = 'Input';

export default Input;
