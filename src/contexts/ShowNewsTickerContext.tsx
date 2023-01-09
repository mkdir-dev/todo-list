import { createContext } from 'react';

export const ShowNewsTickerContext: React.Context<boolean> =
  createContext<boolean>(false);
