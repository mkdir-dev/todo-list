import { SystemStyleObject, Theme } from '@mui/system';
import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

import { mainBgColor, boxShadow } from 'assets/styles/colors';

export const appBarSettingsStyled: SystemStyleObject<Theme> = {
  position: 'relative',
  bgcolor: mainBgColor,
  border: boxShadow,
};

export const ToolbarSettings = styled(Toolbar)({
  '&': {
    maxWidth: '1000px',
    width: '100%',
    margin: '0 auto',
    padding: '10px 24px',

    '@media(max-width:900px)': {
      padding: '8px 18px',
    },

    '@media(max-width:768px)': {
      padding: '6px 12px',
    },

    '@media(max-width:480px)': {
      padding: '6px 10px',
    },
  },
});
