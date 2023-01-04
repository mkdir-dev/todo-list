import React from 'react';
import {
  Dialog,
  ListItemText,
  ListItem,
  List,
  Divider,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import { IconBtn } from 'shared/buttons/IconBtn/IconBtn';
import { TransitionDialog } from '../../../ui/TransitionDialog/TransitionDialog';

import { SettingsDialogProps } from 'typings/shared/dialogs/dialogs';

export const SettingsDialog: React.FC<SettingsDialogProps> = ({
  isSettingsDialog,
  handleClose,
}) => (
  <Dialog
    fullScreen
    open={isSettingsDialog}
    onClose={handleClose}
    TransitionComponent={TransitionDialog}
  >
    <AppBar sx={{ position: 'relative', bgcolor: 'black' }}>
      <Toolbar>
        <IconBtn label="close settings dialog" handleClick={handleClose}>
          <CloseIcon fontSize="inherit" />
        </IconBtn>

        <Typography sx={{ ml: 2, flex: 1 }} variant="h3" component="div">
          settings
        </Typography>
        <IconBtn label="save settings dialog" handleClick={handleClose}>
          <CheckIcon fontSize="inherit" />
        </IconBtn>
      </Toolbar>
    </AppBar>
    <List>
      <ListItem>
        <ListItemText primary="Phone ringtone" secondary="Titania" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="Default notification ringtone"
          secondary="Tethys"
        />
      </ListItem>
    </List>
  </Dialog>
);

/*
        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
*/
