import { SystemStyleObject, Theme } from '@mui/system';
import { Card, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { cardBgColor, boxShadow } from 'assets/styles/colors';

export const listCardStyled: SystemStyleObject<Theme> = {
  '&': {
    width: '100%',
    marginTop: '15px',
    padding: '16px',
    backgroundColor: cardBgColor,
    boxShadow,
    borderRadius: '40px',
  },
};

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
    marginRight: '20px',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
});

export const dividerCardStyled = (color: string): SystemStyleObject<Theme> => ({
  width: '5px',
  border: `3px solid ${color}`,
  borderRadius: '3px',
  margin: '0 10px 0 0',
});

export const typographyCardStyled = {
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};
