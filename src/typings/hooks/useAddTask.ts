import { Tasks } from 'typings/utils/constants';

export interface TaskData {
  title: string;
  description: string;
  priority: 'normal' | 'important' | 'urgent' | 'critical';
  date: string;
}

export interface AddTaskHook {
  taskState: Tasks[];
  onSuccess: (data: Tasks[]) => void;
}

export interface AddTaskHookData {
  // handleAddTask: (values: TaskData) => Promise<void>;
  handleAddTask: (values: TaskData) => void;
  isLoadingAddTask: boolean;
}
