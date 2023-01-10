import { createContext } from 'react';
import { Tasks } from 'typings/utils/constantsTypes';

export const TaskContext: React.Context<Tasks[]> = createContext<Tasks[]>([]);
