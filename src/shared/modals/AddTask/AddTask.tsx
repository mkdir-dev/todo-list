import React, { useState, useCallback } from 'react';
import { isSameDay } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  TextField,
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { PickersDayProps } from '@mui/x-date-pickers/PickersDay';

import CloseIcon from '@mui/icons-material/Close';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { TaskParams, validationAddTask } from './validationAddTask';
import {
  AutocompletePopper,
  autocompleteStyle,
  DatePickerDay,
  datePickerPopperStyled,
  inputFormStyle,
  optionAutocompleteStyle,
  textAreaFormStyle,
} from 'ui/Input/Input';
import { mainBgColor, mainColor } from 'assets/styles/colors';
import { useAddTask } from 'hooks/useAddTask';
import { priorityParams } from 'utils/constants';
import { PriorityParams } from 'typings/utils/constants';
import { datePrevalidator } from 'utils/helpers/dateHelpers';

interface AddTaskProps {
  open: boolean;
  handleClose: () => void;
}

export const AddTask: React.FC<AddTaskProps> = ({ open, handleClose }) => {
  const [dateTask, setDateTask] = useState<Date | null>(null);
  const { isLoadingAddTask, handleAddTask } = useAddTask();

  const {
    getValues,
    setValue,
    register,
    // reset,
    formState: { errors, isDirty, isValid },
    // setError,
    // handleSubmit,
  } = useForm<TaskParams>({
    mode: 'onTouched',
    resolver: zodResolver(validationAddTask),
    defaultValues: {
      title: '',
      description: '',
      priority: priorityParams[0].value,
      date: '',
    },
  });

  const rendersPickerDateBirth = (
    date: Date,
    _selectedDates: Array<Date | null>,
    pickersDayProps: PickersDayProps<Date>
  ): React.ReactElement => {
    const valueToday = dateTask !== null ? isSameDay(date, dateTask) : false;

    return (
      <DatePickerDay
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pickersDayProps}
        isToday={valueToday}
      />
    );
  };

  return (
    <LocalizationProvider locale={ru} dateAdapter={AdapterDateFns}>
      <Dialog
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: mainBgColor,
            borderRadius: '40px',
          },
        }}
        maxWidth="sm"
        fullWidth
        open={open}
        onClose={handleClose}
      >
        <DialogTitle sx={{ color: mainColor }}>Add task</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{ padding: '10px 0', display: 'flex', flexDirection: 'column' }}
          >
            <TextField
              label="Title"
              variant="standard"
              error={!!errors.title?.message}
              helperText={errors.title?.message}
              sx={inputFormStyle}
              disabled={isLoadingAddTask}
              required
              InputProps={{
                endAdornment: (
                  <IconButton
                    sx={{ color: mainColor }}
                    disabled={isLoadingAddTask}
                    onClick={() => {
                      setValue('title', '', { shouldDirty: true });
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                ),
              }}
              {...register('title')}
            />
            <TextField
              label="Description"
              variant="standard"
              error={!!errors.description?.message}
              helperText={errors.description?.message}
              sx={textAreaFormStyle}
              multiline
              maxRows={3}
              disabled={isLoadingAddTask}
              InputProps={{
                endAdornment: (
                  <IconButton
                    sx={{ color: mainColor }}
                    disabled={isLoadingAddTask}
                    onClick={() => {
                      setValue('description', '', { shouldDirty: true });
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                ),
              }}
              {...register('description')}
            />

            <Autocomplete
              sx={autocompleteStyle}
              PopperComponent={AutocompletePopper}
              id="size-small-standard"
              defaultValue={priorityParams[0]}
              options={priorityParams}
              getOptionLabel={(option) => option.title}
              disabled={isLoadingAddTask}
              onChange={(
                _event: React.SyntheticEvent,
                newValue: PriorityParams | null
              ) => {
                setValue('priority', newValue?.value ?? '', {
                  shouldDirty: true,
                });
                register('priority', { value: newValue?.value ?? '' });
              }}
              renderInput={(params) => (
                <TextField
                  variant="standard"
                  label="Priority"
                  sx={inputFormStyle}
                  required
                  {...params}
                />
              )}
              renderOption={(props, option) => (
                <Box
                  key={option.id}
                  component="li"
                  sx={optionAutocompleteStyle}
                  {...props}
                >
                  <Box component="span">{option.title}</Box>
                  <BookmarkIcon sx={{ color: option.color }} />
                </Box>
              )}
            />

            <DesktopDatePicker
              label="Дата рождения"
              value={dateTask}
              renderDay={rendersPickerDateBirth}
              PopperProps={{ sx: datePickerPopperStyled }}
              disabled={isLoadingAddTask}
              disablePast
              onChange={useCallback(
                (newValue: Date | null) => {
                  setDateTask(newValue);

                  setValue('date', datePrevalidator(newValue), {
                    shouldDirty: true,
                  });
                  register('date', { value: datePrevalidator(newValue) });
                },
                [register, setValue]
              )}
              renderInput={(params) => (
                <TextField
                  label="Дата рождения"
                  variant="standard"
                  error={!!errors.date?.message}
                  helperText={errors.date?.message}
                  sx={{
                    ...inputFormStyle,
                    marginTop: '20px',
                    '& .MuiInput-root > div > button': { color: mainColor },
                  }}
                  disabled={isLoadingAddTask}
                  required
                  {...params}
                  InputProps={{
                    endAdornment: (
                      <>
                        <IconButton
                          sx={{ color: mainColor }}
                          disabled={isLoadingAddTask}
                          onClick={() => {
                            setDateTask(null);
                            setValue('date', '', { shouldDirty: true });
                          }}
                        >
                          <CloseIcon />
                        </IconButton>

                        {params.InputProps?.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="submit"
            disabled={isLoadingAddTask || !isDirty || !isValid}
            onClick={() => {
              const values = getValues();
              handleAddTask(values);
            }}
          >
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};
