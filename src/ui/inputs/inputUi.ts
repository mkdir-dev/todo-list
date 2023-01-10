import { SystemStyleObject, Theme, SxProps } from '@mui/system';
import { Popper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import {
  errColor,
  mainColor,
  cardBgColor,
  mainColorHover,
  boxShadow,
  subtitleColor,
} from 'assets/styles/colors';

type DatePickerDayProps = PickersDayProps<Date> & {
  isToday: boolean;
};

export const inputFormStyle: SystemStyleObject<Theme> = {
  width: '100%',

  'MuiFormControl-root': {
    position: 'relative',
  },
  '& .MuiInput-root': {
    color: mainColor,

    '&::before': {
      borderBottom: `1px solid ${mainColorHover}`,
    },

    '&:hover:not(.Mui-disabled)::before': {
      borderBottom: `1px solid ${mainColor}`,
    },

    '&.Mui-error::after': {
      borderColor: errColor,
    },
  },
  '& label': {
    color: mainColorHover,
  },
  '& label:hover': {
    color: mainColorHover,
  },
  '& label.Mui-focused': {
    color: mainColor,
  },
  '& .MuiInput-underline:after': {
    borderBottom: `1px solid ${mainColor}`,
  },
  '.MuiFormLabel-asterisk': {
    color: errColor,
  },
  '& :hover:not(.Mui-disabled)::before': {
    borderBottom: `1px solid ${mainColor}`,
  },

  '& input:invalid + fieldset': {
    borderColor: errColor,
  },
  '& .Mui-disabled::before': {
    borderBottom: `1px solid rgba(0, 0, 0, 0.2)`,
  },

  '&.MuiTextField-root': {
    '& .Mui-error': {
      color: errColor,
    },

    '& > p': {
      width: '100%',
      position: 'absolute',
      top: '55px',
      color: errColor,
    },
  },

  '&.Mui-error': {
    color: errColor,
  },
};

export const textAreaFormStyle: SystemStyleObject<Theme> = {
  width: '100%',
  marginTop: '25px',
  border: '1px solid #999999',
  borderRadius: '4px',
  padding: '8px',

  '& > label': {
    padding: '8px',
  },
  '& > label.Mui-focused': {
    padding: '8px',
  },

  '& .MuiInput-root': {
    color: mainColor,

    '&::before': {
      border: 'none',
    },

    '&:hover:not(.Mui-disabled)::before': {
      border: 'none',
    },

    '&.Mui-focused::after': {
      border: 'none',
    },
    '&.Mui-error::after': {
      border: 'none',
    },
  },
  '& label': {
    color: mainColorHover,
  },
  '& label.Mui-focused': {
    color: mainColor,
  },
  '& .MuiInput-underline:after': {
    border: 'none',
  },
  '.MuiFormLabel-asterisk': {
    color: errColor,
  },
  '& :hover:not(.Mui-disabled)::before': {
    border: '1px solid #999999',
    borderRadius: '4px',
  },

  '& input:invalid + fieldset': {
    border: '1px solid #999999',
    borderRadius: '4px',
  },
  '& .Mui-disabled::before': {
    border: '1px solid #999999',
    borderRadius: '4px',
  },

  '&.MuiTextField-root': {
    '& .Mui-error': {
      color: errColor,
    },

    '& > p': {
      width: '100%',
      position: 'absolute',
      top: '110px',
      color: errColor,
    },
  },

  '&.Mui-error': {
    color: errColor,
  },
};

export const AutocompletePopper = styled(Popper)(() => ({
  [`& .${autocompleteClasses.paper}`]: {
    backgroundColor: cardBgColor,
    borderRadius: '0 0 12px 12px',
  },
  [`& .${autocompleteClasses.listbox}`]: {
    maxHeight: '195px',
    boxShadow,
  },
}));

export const autocompleteStyle: SystemStyleObject<Theme> = {
  width: '100%',
  marginTop: '25px',
  [`& .${autocompleteClasses.endAdornment} > button`]: {
    color: mainColorHover,
  },
};

export const optionAutocompleteStyle: SystemStyleObject<Theme> = {
  [`&.${autocompleteClasses.option}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    color: subtitleColor,

    [`&.${autocompleteClasses.option}[aria-selected="true"]`]: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
      { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
  },
};

export const datePickerPopperStyled: SxProps = {
  '& .MuiPaper-root': {
    padding: '8px 16px',
    backgroundColor: mainColor,
    borderRadius: '8px',
    boxShadow,
  },
  '& .MuiCalendarPicker-root': {},
  '& .PrivatePickersSlideTransition-root': {},
  '& .MuiPickersDay-dayWithMargin': {},
  '& .MuiTabs-root': {
    backgroundColor: 'rgba(120, 120, 120, 0.4)',
  },
};

export const DatePickerDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== 'isToday',
})<DatePickerDayProps>(({ isToday }) => ({
  ...(isToday
    ? {
        '&:focus': { backgroundColor: 'rgba(40, 40, 40, 0.6)' },
        '&.Mui-selected': { color: mainColor, backgroundColor: cardBgColor },
        '&.Mui-selected:focus': { backgroundColor: 'rgba(40, 40, 40, 0.6)' },
        '&.Mui-selected:hover, &.Mui-selected:focus': {
          backgroundColor: 'rgba(40, 40, 40, 0.6)',
        },
      }
    : {
        '&:hover': { backgroundColor: mainColorHover },
        '&.Mui-selected': { backgroundColor: mainColor },
        '&.Mui-selected:focus': { backgroundColor: mainColor },
        '&.Mui-selected:hover, &.Mui-selected:focus': {
          backgroundColor: mainColor,
        },
      }),
})) as React.ComponentType<DatePickerDayProps>;
