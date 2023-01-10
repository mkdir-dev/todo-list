import { Container } from '@mui/system';
import { styled } from '@mui/material/styles';

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
