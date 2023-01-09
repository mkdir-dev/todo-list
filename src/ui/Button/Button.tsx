import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import {
  mainColor,
  subtitleColor,
  successColor,
  // grayColor,
} from 'assets/styles/colors';

export const ActionCancelBtn = styled(Button)<ButtonProps>(() => ({
  color: mainColor,
  border: `1px solid ${mainColor}`,
  borderRadius: '20px',

  '&:hover': {
    color: subtitleColor,
    borderColor: subtitleColor,
  },

  '&.Mui-disabled': {
    color: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
}));

export const ActionConfirmBtn = styled(Button)<ButtonProps>(() => ({
  color: successColor,
  border: `1px solid ${successColor}`,
  borderRadius: '20px',

  '&:hover': {
    color: 'rgba(16, 194, 0, 0.6)',
    borderColor: 'rgba(16, 194, 0, 0.6)',
  },

  '&.Mui-disabled': {
    color: 'rgba(16, 194, 0, 0.3)',
    borderColor: 'rgba(16, 194, 0, 0.3)',
  },
}));
