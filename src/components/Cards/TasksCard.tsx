import React, { useContext } from 'react';
import { Typography, List, ListItem, Divider } from '@mui/material';

import { TaskContext } from 'contexts/TaskContext';
import { useCheckTask } from 'hooks/useCheckTask';
import { IOSSwitch } from 'ui/switches/switchUi';
import { BoxCard, listStyled, dividerStyled } from 'ui/components/cardsUi';
import { priority } from 'utils/constants';
import { mainColor } from 'assets/styles/colors';
import { TasksCardProps } from 'typings/components/componentsTypes';

export const TasksCard: React.FC<TasksCardProps> = ({
  tasks,
  todayTasks,
  handleTaskState,
}) => {
  const taskState = useContext(TaskContext);
  const { isLoadingCheckTask, handleCheckTask } = useCheckTask({
    taskState,
    onSuccess: (data) => {
      handleTaskState(data);
    },
  });

  if (isLoadingCheckTask) console.log('isLoadingCheckTask', isLoadingCheckTask);

  return (
    <List sx={() => (todayTasks ? listStyled : { padding: '0 8px' })}>
      {tasks.tasks.map((task, index) => (
        <ListItem key={`${task.id}-${index}`} sx={{ color: mainColor }}>
          <Divider
            orientation="vertical"
            flexItem
            sx={() => dividerStyled(priority[task.priority].color)}
          />
          <BoxCard>
            <Typography
              variant="h2"
              sx={{ textDecoration: task.done ? 'line-through' : 'none' }}
            >
              {task.title}
            </Typography>
            <Typography variant="subtitle1">{task.description}</Typography>
          </BoxCard>
          <IOSSwitch
            checked={task.done}
            onClick={() => {
              handleCheckTask(task);
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};
