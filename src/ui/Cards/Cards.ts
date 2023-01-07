import { SystemStyleObject, Theme } from '@mui/system';
import { List, Card, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { cardBgColor, boxShadow } from 'assets/styles/colors';

export const ListTodayCard = styled(List)({
  '&': {
    width: '100%',
    marginTop: '15px',
    padding: '16px',
    backgroundColor: cardBgColor,
    boxShadow,
    borderRadius: '40px',
  },
});

export const CardTasks = styled(Card)({
  '&': {
    width: '100%',
    marginTop: '15px',
    padding: '20px',
    backgroundColor: cardBgColor,
    boxShadow,
    borderRadius: '40px',
  },
});

export const BoxCard = styled(Box)({
  '&': {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export const dividerStyled = (color: string): SystemStyleObject<Theme> => ({
  width: '5px',
  border: `3px solid ${color}`,
  borderRadius: '3px',
  margin: '0 10px 0 0',
});
