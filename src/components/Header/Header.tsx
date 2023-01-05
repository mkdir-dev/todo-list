import React, { useState } from 'react';
import { Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

import { HeaderBox } from 'ui/Header/Header';
import { IconBtn } from 'shared/buttons/IconBtn/IconBtn';
import { Settings } from 'components/Settings/Settings';

export const Header: React.FC = () => {
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
      />
    </>
  );
};
