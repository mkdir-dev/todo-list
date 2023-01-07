import React, { useContext } from 'react';
import {
  Dialog,
  AppBar,
  Typography,
  Divider,
  ListItem,
  ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { ShowNewsTickerContext } from 'contexts/ShowNewsTickerContext';

import { IconBtn } from 'shared/buttons/IconBtn/IconBtn';
import { TransitionDialog } from 'ui/TransitionDialog/TransitionDialog';
import {
  appBarSettingsStyled,
  ListSettings,
  ToolbarSettings,
} from 'ui/Settings/Settings';
import { IOSSwitch } from 'ui/Switch/Switch';

import { SettingsProps } from 'typings/components/Settings';

export const Settings: React.FC<SettingsProps> = ({
  isSettingsDialog,

  handleShowNewsTicker,
  handleClose,
}) => {
  const isShowNewsTicker = useContext(ShowNewsTickerContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleShowNewsTicker(event.target.checked);
  };

  return (
    <Dialog
      fullScreen
      open={isSettingsDialog}
      onClose={handleClose}
      TransitionComponent={TransitionDialog}
    >
      <AppBar sx={appBarSettingsStyled}>
        <ToolbarSettings>
          <Typography variant="h2" sx={{ ml: 2, flex: 1 }}>
            settings
          </Typography>

          <IconBtn label="close settings dialog" handleClick={handleClose}>
            <CloseIcon fontSize="inherit" />
          </IconBtn>
        </ToolbarSettings>
      </AppBar>

      <ListSettings>
        <ListItem>
          <ListItemText primary="News" secondary="Show news ticker" />
          <IOSSwitch checked={isShowNewsTicker} onChange={handleChange} />
        </ListItem>

        <Divider />

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
      </ListSettings>
    </Dialog>
  );
};
