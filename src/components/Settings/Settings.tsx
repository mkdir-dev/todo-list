import React from 'react';
import { Dialog, AppBar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import { IconBtn } from 'shared/buttons/IconBtn/IconBtn';
import { TransitionDialog } from 'ui/TransitionDialog/TransitionDialog';
import { appBarSettingsStyled, ToolbarSettings } from 'ui/Settings/Settings';

import { SettingsProps } from 'typings/components/Settings';

export const Settings: React.FC<SettingsProps> = ({
  isSettingsDialog,
  handleClose,
}) => (
  <Dialog
    fullScreen
    open={isSettingsDialog}
    onClose={handleClose}
    TransitionComponent={TransitionDialog}
  >
    <AppBar sx={appBarSettingsStyled}>
      <ToolbarSettings>
        <IconBtn label="close settings dialog" handleClick={handleClose}>
          <CloseIcon fontSize="inherit" />
        </IconBtn>

        <Typography variant="h2" sx={{ ml: 2, flex: 1 }}>
          settings
        </Typography>

        <IconBtn label="save settings dialog" handleClick={handleClose}>
          <CheckIcon fontSize="inherit" />
        </IconBtn>
      </ToolbarSettings>
    </AppBar>
  </Dialog>
);

/*
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
*/
