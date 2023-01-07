import { SystemStyleObject, Theme } from '@mui/system';
import { Toolbar, List } from '@mui/material';
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
    padding: '10px 48px',

    '@media(max-width:900px)': {
      padding: '8px 36px',
    },

    '@media(max-width:768px)': {
      padding: '6px 24px',
    },

    '@media(max-width:480px)': {
      padding: '6px 20px',
    },
  },
});

export const ListSettings = styled(List)({
  '&': {
    maxWidth: '1000px',
    width: '100%',
    margin: '0 auto',
    padding: '10px 48px',

    '@media(max-width:900px)': {
      padding: '8px 36px',
    },

    '@media(max-width:768px)': {
      padding: '6px 24px',
    },

    '@media(max-width:480px)': {
      padding: '6px 20px',
    },
  },
});

/*
List

export const AppContainer = styled(Container)({
  '&': {
    maxWidth: '1000px',
    minHeight: '100vh',
    margin: '0 auto',
    padding: '20px 48px',

    '@media(max-width:900px)': {
      padding: '16px 36px',
    },

    '@media(max-width:768px)': {
      padding: '13px 24px',
    },

    '@media(max-width:480px)': {
      padding: '13px 20px',
    },
  },
});
*/
