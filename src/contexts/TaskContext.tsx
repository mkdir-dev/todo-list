import { createContext } from 'react';
import { Tasks } from 'typings/utils/constants';

export const TaskContext: React.Context<Tasks[]> = createContext<Tasks[]>([]);
