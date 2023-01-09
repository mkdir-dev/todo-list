import React, { useState, useContext } from 'react';
import { format } from 'date-fns';
import { Box, Typography, Checkbox, List, ListItem } from '@mui/material';

import { TaskContext } from 'contexts/TaskContext';
import { TodayTasksCard } from 'components/Cards/TodayTasksCard';
import { FutureCard } from 'components/Cards/FutureCard';
import { MainBox, MainListItem } from 'ui/Main/Main';
import { CheckedIcon, CheckboxIcon } from 'ui/BpCheckbox/BpCheckbox';
import { Tasks } from 'typings/utils/constants';

export const Main: React.FC = () => {
  const taskState = useContext(TaskContext);
  const [isTodayCard, setTodayCard] = useState<boolean>(false);

  const today = format(new Date(), 'yyyy-MM-dd');
  const tasksToday: Tasks | undefined = taskState.find(
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

        {taskState
          .filter((item) => Date.parse(today) < Date.parse(item.date))
          .map((task, index) => {
            return (
              <ListItem key={`${task.uuid}-${index}`}>
                <FutureCard tasks={task} />
              </ListItem>
            );
          })}
      </List>
    </MainBox>
  );
};
