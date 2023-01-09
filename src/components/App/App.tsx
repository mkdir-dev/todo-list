import React, { useState } from 'react';

import { TaskContext } from 'contexts/TaskContext';
import { ShowNewsTickerContext } from 'contexts/ShowNewsTickerContext';

import { Header } from 'components/Header/Header';
import { Main } from 'components/Main/Main';
import { Ticker } from 'components/Ticker/Ticker';

import { AppContainer } from 'ui/App/App';
import { Tasks } from 'typings/utils/constants';

export const App: React.FC = () => {
  const [taskState, setTaskState] = useState<Tasks[]>([]);
  const [isShowNewsTicker, setShowNewsTicker] = useState<boolean>(true);

  const handleTaskState = (value: React.SetStateAction<Tasks[]>): void => {
    setTaskState(value);
  };

  const handleShowNewsTicker = (
    boolean: React.SetStateAction<boolean>
  ): void => {
    setShowNewsTicker(boolean);
  };

  return (
    <TaskContext.Provider value={taskState}>
      <ShowNewsTickerContext.Provider value={isShowNewsTicker}>
        <AppContainer>
          <Header
            handleTaskState={handleTaskState}
            handleShowNewsTicker={handleShowNewsTicker}
          />

          <Main />

          {isShowNewsTicker && <Ticker />}
        </AppContainer>
      </ShowNewsTickerContext.Provider>
    </TaskContext.Provider>
  );
};
