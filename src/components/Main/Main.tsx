import React, { useState, useContext } from 'react';
import { format } from 'date-fns';
import {
  Typography,
  Checkbox,
  List,
  ListItem,
  Card,
  CardActions,
  CardContent,
  Collapse,
} from '@mui/material';

import { TaskContext } from 'contexts/TaskContext';
import { TasksCard } from 'components/Cards/TasksCard';
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
          <Card sx={{ width: '100%', backgroundColor: 'transparent' }}>
            <CardActions
              sx={{ padding: 0, cursor: tasksToday ? 'pointer' : 'default' }}
              onClick={() => {
                if (tasksToday) setTodayCard(!isTodayCard);
              }}
            >
              <Checkbox
                sx={{ mr: '10px', padding: 0 }}
                checked={isTodayCard}
                checkedIcon={<CheckedIcon />}
                icon={<CheckboxIcon />}
                disabled={!tasksToday}
                onClick={() => {
                  if (tasksToday) setTodayCard(!isTodayCard);
                }}
              />
              <Typography variant="h2">today tasks:</Typography>
            </CardActions>
            <Collapse
              in={isTodayCard && !!tasksToday}
              timeout="auto"
              unmountOnExit
            >
              <CardContent sx={{ paddingLeft: 0, paddingRight: 0 }}>
                {tasksToday && <TasksCard tasks={tasksToday} todayTasks />}
              </CardContent>
            </Collapse>
          </Card>
        </MainListItem>

        {taskState
          .filter((item) => Date.parse(today) < Date.parse(item.date))
          .map((task) => {
            return (
              <ListItem key={task.uuid}>
                <FutureCard tasks={task} todayTasks={false} />
              </ListItem>
            );
          })}
      </List>
    </MainBox>
  );
};
