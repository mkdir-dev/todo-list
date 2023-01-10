import { createContext } from 'react';
import { Tasks } from 'types/utils/constantsTypes';

export const TaskContext: React.Context<Tasks[]> = createContext<Tasks[]>([]);
