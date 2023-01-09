import React from 'react';
import { Typography, ListItem, Divider } from '@mui/material';

import { IOSSwitch } from 'ui/Switch/Switch';
import { BoxCard, dividerStyled, ListTodayCard } from 'ui/Cards/Cards';
import { priority } from 'utils/constants';
import { mainColor } from 'assets/styles/colors';
import { TasksCardProps } from 'typings/components/Cards';

export const TodayTasksCard: React.FC<TasksCardProps> = ({ tasks }) => (
  <ListTodayCard>
    {tasks.tasks.map((task, index) => (
      <ListItem
        key={`${task.id}-${index}`}
        sx={{ color: mainColor }}
      >
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
        <IOSSwitch checked={task.done} />
      </ListItem>
    ))}
  </ListTodayCard>
);
