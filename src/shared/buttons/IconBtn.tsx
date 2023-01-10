import React from 'react';
import { IconButton } from '@mui/material';

import { mainColor } from 'assets/styles/colors';
import { IconBtnProps } from 'typings/shared/buttonsTypes';

export const IconBtn: React.FC<IconBtnProps> = ({
  label,
  children,
  handleClick,
}) => (
  <IconButton
    aria-label={label}
    size="large"
    sx={{ color: mainColor }}
    onClick={handleClick}
  >
    {children}
  </IconButton>
);
