import React, { useContext, useState } from 'react';
import { Typography, List, ListItem, Divider } from '@mui/material';

import { TaskContext } from 'contexts/TaskContext';
import { useCheckTask } from 'hooks/useCheckTask';
import { InfoTaskModal } from 'shared/modals/InfoTaskModal/InfoTaskModal';
import { IOSSwitch } from 'ui/switches/switchUi';
import {
  BoxCard,
  listCardStyled,
  dividerCardStyled,
  typographyCardStyled,
} from 'ui/components/cardsUi';
import { priority } from 'utils/constants';
import { mainColor } from 'assets/styles/colors';
import { TasksCardProps } from 'typings/components/componentsTypes';
import { Task } from 'typings/utils/constantsTypes';

export const TasksCard: React.FC<TasksCardProps> = ({
  tasks,
  todayTasks,
  handleTaskState,
}) => {
  const taskState = useContext(TaskContext);
  const [isInfoTaskModal, setInfoTaskModal] = useState<boolean>(false);
  const [infoTask, setInfoTask] = useState<Task | null>(null);

  const { isLoadingCheckTask, handleCheckTask } = useCheckTask({
    taskState,
    onSuccess: (data) => {
      handleTaskState(data);
    },
  });

  if (isLoadingCheckTask) console.log('isLoadingCheckTask', isLoadingCheckTask);

  return (
    <>
      <List sx={() => (todayTasks ? listCardStyled : {})}>
        {tasks.tasks.map((task, index) => (
          <ListItem
            key={`${task.id}-${index}`}
            sx={{ padding: '8px 0', color: mainColor, cursor: 'pointer' }}
            onClick={() => {
              setInfoTaskModal(true);
              setInfoTask(task);
            }}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={() => dividerCardStyled(priority[task.priority].color)}
            />
            <BoxCard>
              <Typography
                variant="h2"
                sx={{
                  ...typographyCardStyled,
                  textDecoration: task.done ? 'line-through' : 'none',
                }}
              >
                {task.title}
              </Typography>
              <Typography variant="subtitle1" sx={typographyCardStyled}>
                {task.description}
              </Typography>
            </BoxCard>

            <IOSSwitch
              checked={task.done}
              sx={{ alignItems: 'flex-end' }}
              onClick={(evt) => {
                evt.stopPropagation();

                handleCheckTask(task);
              }}
            />
          </ListItem>
        ))}
      </List>

      <InfoTaskModal
        infoTask={infoTask}
        open={isInfoTaskModal && !!infoTask}
        handleClose={() => {
          setInfoTaskModal(false);
        }}
        handleCheckTask={handleCheckTask}
      />
    </>
  );
};
