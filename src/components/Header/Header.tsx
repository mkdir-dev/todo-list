import React, { useState } from 'react';
import { Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

import { Settings } from 'components/Settings/Settings';
import { IconBtn } from 'shared/buttons/IconBtn';
import { HeaderBox } from 'ui/Header/Header';
import { HeaderProps } from 'typings/components/componentsTypes';

export const Header: React.FC<HeaderProps> = ({
  handleTaskState,
  handleShowNewsTicker,
}) => {
  const [isSettingsDialog, setSettingsDialog] = useState(false);

  return (
    <>
      <HeaderBox component="header">
        <Typography variant="h1">to do</Typography>

        <IconBtn
          label="settings"
          handleClick={() => {
            setSettingsDialog(true);
          }}
        >
          <SettingsIcon fontSize="inherit" />
        </IconBtn>
      </HeaderBox>

      <Settings
        isSettingsDialog={isSettingsDialog}
        handleClose={() => {
          setSettingsDialog(false);
        }}
        handleTaskState={handleTaskState}
        handleShowNewsTicker={handleShowNewsTicker}
      />
    </>
  );
};
