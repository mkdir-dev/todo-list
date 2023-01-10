import { SystemStyleObject, Theme } from '@mui/system';
import { grayBlueColor } from 'assets/styles/colors';

export const TickerBoxStyled: SystemStyleObject<Theme> = {
  position: 'fixed',
  bottom: '20px',
  left: 0,
  width: '100%',
  height: '90px',
  margin: '0 auto',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  bgcolor: grayBlueColor,
  overflow: 'clip',

  '@keyframes text': {
    '0%': {
      transform: 'translate(1%, 0)',
    },
    '100%': {
      transform: 'translate(-100%, 0)',
    },
  },
};
