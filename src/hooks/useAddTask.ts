import { useMutation } from 'react-query';

export interface TaskData {
  title: string;
}

export interface AddTaskHookData {
  // handleAddTask: (values: TaskData) => Promise<void>;
  handleAddTask: (values: TaskData) => void;
  isLoadingAddTask: boolean;
}

export const useAddTask = (): AddTaskHookData => {
  const { mutate, isLoading } = useMutation(async (values: TaskData) => {
    console.log('values', values);
  }, {});

  return {
    handleAddTask: mutate,
    isLoadingAddTask: isLoading,
  };
};
