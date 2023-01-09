import React, { useState } from 'react';
import { Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

import { HeaderBox } from 'ui/Header/Header';
import { IconBtn } from 'shared/buttons/IconBtn/IconBtn';
import { Settings } from 'components/Settings/Settings';
import { Tasks } from 'typings/utils/constants';

interface HeaderProps {
  handleTaskState: (value: React.SetStateAction<Tasks[]>) => void;
  handleShowNewsTicker: (boolean: React.SetStateAction<boolean>) => void;
}

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
