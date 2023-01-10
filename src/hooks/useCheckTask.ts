import { useMutation } from 'react-query';

import { CheckTaskTaskHookData, TaskHook } from 'types/hooks/useAddTask';
import { Task } from 'types/utils/constantsTypes';

export const useCheckTask = ({
  taskState,
  onSuccess,
}: TaskHook): CheckTaskTaskHookData => {
  const { mutate, isLoading } = useMutation(
    async (values: Task) => {
      return taskState.map((el) => ({
        ...el,
        tasks:
          el.date === values.date
            ? el.tasks.map((i) => ({
                ...i,
                done: i.id === values.id ? !values.done : values.done,
              }))
            : el.tasks,
      }));
    },
    {
      onSuccess,
    }
  );

  return {
    handleCheckTask: mutate,
    isLoadingCheckTask: isLoading,
  };
};
