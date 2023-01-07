import React, { useState } from 'react';
import { format } from 'date-fns';

import { Box, Typography, Checkbox, List, ListItem } from '@mui/material';

import { MainBox, MainListItem } from 'ui/Main/Main';
import { CheckedIcon, CheckboxIcon } from 'ui/BpCheckbox/BpCheckbox';
import { Tasks, tasksDefault } from 'utils/constants';
import { TodayTasksCard } from 'components/Cards/TodayTasksCard';
import { FutureCard } from 'components/Cards/FutureCard';

export const Main: React.FC = () => {
  const [isTodayCard, setTodayCard] = useState<boolean>(false);

  const today = format(new Date(), 'yyyy-MM-dd');
  const tasksToday: Tasks | undefined = tasksDefault.find(
    (item) => item.date === today
  );

  return (
    <MainBox component="main">
      <List>
        <MainListItem>
          <Box sx={{ display: 'flex' }}>
            <Checkbox
              sx={{ mr: '10px', padding: 0 }}
              checked={isTodayCard}
              checkedIcon={<CheckedIcon />}
              icon={<CheckboxIcon />}
              disabled={!tasksToday}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTodayCard(event.target.checked);
              }}
            />
            <Typography variant="h2">today tasks:</Typography>
          </Box>

          {isTodayCard && tasksToday && <TodayTasksCard tasks={tasksToday} />}
        </MainListItem>

        {tasksDefault
          .filter((item) => item.date !== today)
          .map((task, index) => {
            return (
              <>
                <ListItem key={`${task.uuid}-${index}`}>
                  <FutureCard tasks={task} />
                </ListItem>
              </>
            );
          })}
      </List>
    </MainBox>
  );
};
