import React from 'react';
import { format } from 'date-fns';

import {
  CardContent,
  CardActions,
  Collapse,
  Typography,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { TasksCard } from './TasksCard';
import { ExpandMore } from 'shared/buttons/ExpandMore/ExpandMore';
import { CardTasks, dividerStyled } from 'ui/Cards/Cards';

import { grayColor } from 'assets/styles/colors';
import { TasksCardProps } from 'typings/components/Cards';

export const FutureCard: React.FC<TasksCardProps> = ({ tasks }) => {
  const [expanded, setExpanded] = React.useState(false);

  const today = format(new Date(), 'yyyy-MM-dd');
  const tomorrow = format(
    new Date().setDate(new Date().getDate() + 1),
    'yyyy-MM-dd'
  );
  const date = format(new Date(tasks.date), 'dd/MM');

  let titleTask = '';

  if (tasks.date === today) {
    titleTask += 'Today';
  } else if (tasks.date === tomorrow) {
    titleTask += 'Tomorrow';
  } else {
    titleTask += date;
  }

  return (
    <CardTasks>
      <CardActions
        sx={{ padding: 0, cursor: 'pointer' }}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <Divider
          orientation="vertical"
          flexItem
          sx={() => dividerStyled(grayColor)}
        />
        <Typography variant="h2" sx={{ flex: 1 }}>
          {`${titleTask} Tasks:`}
        </Typography>

        <ExpandMore
          expand={expanded}
          onClick={() => {
            setExpanded(!expanded);
          }}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <TasksCard tasks={tasks} />
        </CardContent>
      </Collapse>
    </CardTasks>
  );
};