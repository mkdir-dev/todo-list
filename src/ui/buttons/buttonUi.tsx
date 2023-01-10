import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { mainColor, subtitleColor, successColor } from 'assets/styles/colors';

export const ActionCancelBtn = styled(Button)<ButtonProps>(() => ({
  color: mainColor,
  border: `2px solid ${mainColor}`,
  borderRadius: '20px',
  boxSizing: 'border-box',

  '&:hover': {
    color: subtitleColor,
    border: `2px solid ${subtitleColor}`,
  },

  '&.Mui-disabled': {
    color: 'rgba(255, 255, 255, 0.3)',
    border: `2px solid rgba(255, 255, 255, 0.3)`,
  },
}));

export const ActionConfirmBtn = styled(Button)<ButtonProps>(() => ({
  color: successColor,
  border: `2px solid ${successColor}`,
  borderRadius: '20px',
  boxSizing: 'border-box',

  '&:hover': {
    color: 'rgba(16, 194, 0, 0.6)',
    border: `2px solid rgba(16, 194, 0, 0.6)`,
  },

  '&.Mui-disabled': {
    color: 'rgba(16, 194, 0, 0.3)',
    border: `2px solid rgba(16, 194, 0, 0.3)`,
  },
}));
