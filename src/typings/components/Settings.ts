import { Tasks } from 'typings/utils/constants';

export interface SettingsProps {
  isSettingsDialog: boolean;

  handleClose: () => void;
  handleTaskState: (value: React.SetStateAction<Tasks[]>) => void;
  handleShowNewsTicker: (boolean: boolean) => void;
}
