import { Tasks } from 'types/utils/constantsTypes';

export interface HeaderProps {
  handleTaskState: (value: Tasks[]) => void;
  handleShowNewsTicker: (boolean: React.SetStateAction<boolean>) => void;
}

export interface SettingsProps {
  isSettingsDialog: boolean;

  handleClose: () => void;
  handleTaskState: (value: Tasks[]) => void;
  handleShowNewsTicker: (boolean: boolean) => void;
}

export interface MainProps {
  handleTaskState: (value: Tasks[]) => void;
}

export interface TasksCardProps {
  tasks: Tasks;
  todayTasks: boolean;
  handleTaskState: (value: Tasks[]) => void;
}
