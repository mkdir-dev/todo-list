import React, { useContext, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { isSameDay } from 'date-fns';
import { ru } from 'date-fns/locale';
import {
  Box,
  TextField,
  Autocomplete,
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

import { TaskContext } from 'contexts/TaskContext';
import { useAddTask } from 'hooks/useAddTask';
import { validationAddTask } from './validationAddTask';
import {
  AutocompletePopper,
  autocompleteStyle,
  DatePickerDay,
  datePickerPopperStyled,
  inputFormStyle,
  optionAutocompleteStyle,
  textAreaFormStyle,
} from 'ui/inputs/inputUi';
import { ActionCancelBtn, ActionConfirmBtn } from 'ui/buttons/buttonUi';
import { datePrevalidator } from 'utils/helpers/dateHelpers';
import { priorityParams } from 'utils/constants';
import { mainBgColor, mainColor } from 'assets/styles/colors';
import {
  AddTaskModalProps,
  ValidAddTaskParams,
} from 'types/shared/modalsTypes';
import { PriorityParams } from 'types/utils/constantsTypes';

export const AddTaskModal: React.FC<AddTaskModalProps> = ({
  open,
  handleClose,
  handleCloseSettings,
  handleTaskState,
}) => {
  const taskState = useContext(TaskContext);
  const [dateTask, setDateTask] = useState<Date | null>(null);

  const {
    getValues,
    setValue,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<ValidAddTaskParams>({
    mode: 'onTouched',
    resolver: zodResolver(validationAddTask),
    defaultValues: {
      title: '',
      description: '',
      priority: priorityParams[0].value,
      date: '',
    },
  });

  const { isLoadingAddTask, handleAddTask } = useAddTask({
    taskState,
    onSuccess: (data) => {
      handleTaskState(data);
      handleClose();

      setTimeout(() => {
        handleCloseSettings();
      }, 100);

      reset();
      setDateTask(null);
    },
  });

  const rendersPickerDateBirth = (
    date: Date,
    _selectedDates: Array<Date | null>,
    pickersDayProps: PickersDayProps<Date>
  ): React.ReactElement => {
    const valueToday = dateTask !== null ? isSameDay(date, dateTask) : false;

    return <DatePickerDay {...pickersDayProps} isToday={valueToday} />;
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
                setValue('priority', newValue?.value ?? 'normal', {
                  shouldDirty: true,
                });
                register('priority', { value: newValue?.value ?? 'normal' });
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
              label="Date"
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
                  label="???????? ????????????????"
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

        <DialogActions sx={{ padding: '20px' }}>
          <ActionCancelBtn
            variant="outlined"
            size="large"
            disabled={isLoadingAddTask}
            onClick={handleClose}
          >
            Cancel
          </ActionCancelBtn>
          <ActionConfirmBtn
            type="submit"
            variant="outlined"
            size="large"
            disabled={isLoadingAddTask || !isValid}
            onClick={() => {
              const values = getValues();
              handleAddTask(values);
            }}
          >
            Confirm
          </ActionConfirmBtn>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};
