import { useMutation } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

import {
  AddTaskHook,
  AddTaskHookData,
  TaskData,
} from 'typings/hooks/useAddTask';
import { Task, Tasks } from 'typings/utils/constants';

export const useAddTask = ({
  taskState,
  onSuccess,
}: AddTaskHook): AddTaskHookData => {
  const { mutate, isLoading } = useMutation(
    async (values: TaskData) => {
      let arr: Tasks[] = [];
      const uuid: string = uuidv4();
      const id: string = uuidv4();

      const task: Task = {
        id,
        date: values.date,
        priority: values.priority,
        title: values.title,
        description: values.description,
        done: false,
      };

      const newTasksList: Tasks = {
        uuid,
        date: values.date,
        tasks: [task],
      };

      if (taskState.length === 0) {
        arr.push(newTasksList);
        return arr;
      }

      if (taskState.some((el) => el.date === values.date)) {
        arr = taskState.slice(0);
        const index: number = arr.findIndex((el) => el.date === values.date);
        arr[index].tasks.push(task);
        return arr;
      }

      arr = taskState.slice(0);
      arr.push(newTasksList);
      return arr;
    },
    {
      onSuccess,
    }
  );

  return {
    handleAddTask: mutate,
    isLoadingAddTask: isLoading,
  };
};
