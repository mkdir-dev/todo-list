import React, { useContext, useState } from 'react';
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
import AddTaskIcon from '@mui/icons-material/AddTask';

import { ShowNewsTickerContext } from 'contexts/ShowNewsTickerContext';
import { AddTaskModal } from 'shared/modals/AddTaskModal/AddTaskModal';
import { IconBtn } from 'shared/buttons/IconBtn';
import { TransitionDialog } from 'ui/transitions/transitionUi';
import {
  appBarSettingsStyled,
  ListSettings,
  ToolbarSettings,
} from 'ui/components/settingsUi';
import { IOSSwitch } from 'ui/switches/switchUi';
import { mainColor, successColor } from 'assets/styles/colors';
import { SettingsProps } from 'types/components/componentsTypes';

export const Settings: React.FC<SettingsProps> = ({
  isSettingsDialog,

  handleClose,
  handleTaskState,
  handleShowNewsTicker,
}) => {
  const queryClient = useQueryClient();

  const isShowNewsTicker = useContext(ShowNewsTickerContext);
  const [isAddTask, setAddTask] = useState<boolean>(false);

  const handleChangeSwitch = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    handleShowNewsTicker(event.target.checked);
    queryClient.invalidateQueries('dataNews');
  };

  return (
    <>
      <Dialog
        fullScreen
        sx={{ '& .MuiDialog-paper': { backgroundColor: mainColor } }}
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
            <IOSSwitch
              checked={isShowNewsTicker}
              onChange={handleChangeSwitch}
            />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemText primary="New task" secondary="Create task" />
            <IconBtn
              label="add task"
              handleClick={() => {
                setAddTask(true);
              }}
            >
              <AddTaskIcon fontSize="inherit" sx={{ color: successColor }} />
            </IconBtn>
          </ListItem>
        </ListSettings>
      </Dialog>

      <AddTaskModal
        open={isAddTask}
        handleClose={() => {
          setAddTask(false);
        }}
        handleCloseSettings={handleClose}
        handleTaskState={handleTaskState}
      />
    </>
  );
};
