import { styled } from '@mui/material/styles';
import { mainColor, mainColorHover, boxShadow } from 'assets/styles/colors';

export const CheckboxIcon = styled('span')(() => ({
  borderRadius: '25%',
  width: 20,
  height: 20,
  boxShadow,
  backgroundColor: mainColor,
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19, 124, 189, 0.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: mainColorHover,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(57, 75, 89, 0.5)',
  },
}));

export const CheckedIcon = styled(CheckboxIcon)({
  backgroundColor: mainColor,
  '&:before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15 15'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23222'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: mainColorHover,
  },
});
