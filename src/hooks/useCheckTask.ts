import { useMutation } from 'react-query';

import { CheckTaskTaskHookData, TaskHook } from 'typings/hooks/useAddTask';
import { Task, Tasks } from 'typings/utils/constants';

export const useCheckTask = ({
  taskState,
  onSuccess,
}: TaskHook): CheckTaskTaskHookData => {
  const { mutate, isLoading } = useMutation(
    async (values: Task) => {
      const arr: Tasks[] = taskState.map((el) => {
        if (el.date === values.date) {
          const tasksArr = el.tasks.map((i) => {
            if (i.id === values.id) {
              return {
                ...i,
                done: !values.done,
              };
            }
            return i;
          });

          return {
            ...el,
            tasks: tasksArr,
          };
        }
        return el;
      });

      return arr;
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
