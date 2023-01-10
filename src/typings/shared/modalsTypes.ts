import { z } from 'zod';

import { validationAddTask } from 'shared/modals/AddTaskModal/validationAddTask';
import { Tasks } from 'typings/utils/constantsTypes';

export interface AddTaskModalProps {
  open: boolean;
  handleClose: () => void;
  handleCloseSettings: () => void;
  handleTaskState: (value: Tasks[]) => void;
}

export type ValidAddTask = z.ZodObject<{
  title: z.ZodString;
  description: z.ZodString;
  priority: z.ZodEnum<['normal', 'important', 'urgent', 'critical']>;
  date: z.ZodString;
}>;

export type ValidAddTaskParams = z.infer<typeof validationAddTask>;
