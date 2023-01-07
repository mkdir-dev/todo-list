import React, { useContext } from 'react';
import { useQueryClient } from 'react-query';
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
  const queryClient = useQueryClient();

  const handleChangeSwitch = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    handleShowNewsTicker(event.target.checked);
    queryClient.invalidateQueries('dataNews');
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
          <IOSSwitch checked={isShowNewsTicker} onChange={handleChangeSwitch} />
        </ListItem>

        <Divider />
      </ListSettings>
    </Dialog>
  );
};
