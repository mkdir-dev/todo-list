import React from 'react';
import { format } from 'date-fns';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Typography,
} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import {
  ActionCancelBtn,
  ActionConfirmBtn,
  ActionErrBtn,
} from 'ui/buttons/buttonUi';
import { mainBgColor, mainColor } from 'assets/styles/colors';
import { InfoTaskModalProps } from 'types/shared/modalsTypes';
import { priority } from 'utils/constants';

export const InfoTaskModal: React.FC<InfoTaskModalProps> = ({
  open,
  infoTask,
  handleClose,
  handleCheckTask,
}) => {
  return (
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
      <DialogTitle
        sx={{
          padding: '24px 24px 4px',
          color: mainColor,
          wordWrap: 'break-word',
          '&::first-letter': {
            textTransform: 'uppercase',
          },
        }}
      >
        {infoTask?.title}
      </DialogTitle>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '0 24px' }}>
        <BookmarkIcon
          sx={{
            marginRight: '10px',
            color: infoTask
              ? priority[infoTask.priority].color
              : priority.normal.color,
          }}
        />
        <Typography variant="subtitle1">
          {infoTask?.date ? format(new Date(infoTask?.date), 'dd.MM.yyyy') : ''}
        </Typography>
      </Box>

      <DialogContent>
        <DialogContentText
          sx={{
            color: mainColor,
            wordWrap: 'break-word',
            '&::first-letter': {
              textTransform: 'uppercase',
            },
          }}
        >
          {infoTask?.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: '20px' }}>
        <ActionCancelBtn variant="outlined" size="large" onClick={handleClose}>
          Close
        </ActionCancelBtn>

        {infoTask?.done ? (
          <ActionErrBtn
            type="submit"
            variant="outlined"
            size="large"
            onClick={() => {
              if (infoTask) handleCheckTask(infoTask);

              handleClose();
            }}
          >
            Later
          </ActionErrBtn>
        ) : (
          <ActionConfirmBtn
            type="submit"
            variant="outlined"
            size="large"
            onClick={() => {
              if (infoTask) handleCheckTask(infoTask);

              handleClose();
            }}
          >
            Done
          </ActionConfirmBtn>
        )}
      </DialogActions>
    </Dialog>
  );
};
