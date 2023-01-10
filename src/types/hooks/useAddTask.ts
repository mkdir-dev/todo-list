import { Task, Tasks } from 'types/utils/constantsTypes';

export interface TaskData {
  title: string;
  description: string;
  priority: 'normal' | 'important' | 'urgent' | 'critical';
  date: string;
}

export interface TaskHook {
  taskState: Tasks[];
  onSuccess: (data: Tasks[]) => void;
}

export interface AddTaskHookData {
  handleAddTask: (values: TaskData) => void;
  isLoadingAddTask: boolean;
}

export interface CheckTaskTaskHookData {
  handleCheckTask: (values: Task) => void;
  isLoadingCheckTask: boolean;
}
