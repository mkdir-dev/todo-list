import { z } from 'zod';
export type TaskParams = z.infer<typeof validationAddTask>;

export const validationAddTask: z.ZodObject<{
  title: z.ZodString;
  description: z.ZodString;
  priority: z.ZodEnum<['normal', 'important', 'urgent', 'critical']>;
  date: z.ZodString;
}> = z.object({
  title: z.string().min(1, { message: 'Обязательное поле' }),
  description: z.string().max(160, { message: 'Не более 160 символов' }),
  priority: z.enum(['normal', 'important', 'urgent', 'critical']),
  date: z.string().min(1, { message: 'Обязательное поле' }),
});
