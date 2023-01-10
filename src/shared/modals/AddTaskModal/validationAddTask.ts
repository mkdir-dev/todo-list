import { z } from 'zod';
import { ValidAddTask } from 'types/shared/modalsTypes';

export const validationAddTask: ValidAddTask = z.object({
  title: z
    .string()
    .min(1, { message: 'Обязательное поле' })
    .max(40, { message: 'Не более 40 символов' }),
  description: z.string().max(160, { message: 'Не более 160 символов' }),
  priority: z.enum(['normal', 'important', 'urgent', 'critical']),
  date: z.string().min(1, { message: 'Обязательное поле' }),
});
