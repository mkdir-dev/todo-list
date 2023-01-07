import * as React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';

import { mainColor, mainColorHover } from 'assets/styles/colors';
import { ExpandMoreProps } from 'typings/shared/buttons/buttons';

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  width: '22px',
  height: '22px',
  marginRight: '21px',
  backgroundColor: mainColor,
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),

  '&: hover': {
    backgroundColor: mainColorHover,
  },
}));
