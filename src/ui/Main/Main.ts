import { Box, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { mainColor } from 'assets/styles/colors';

export const MainBox = styled(Box)({
  '&': {
    paddingBottom: '110px',
  },
});

export const MainListItem = styled(ListItem)({
  '&': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: mainColor,
  },
});
