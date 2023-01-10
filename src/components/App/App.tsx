import React, { useState, useEffect } from 'react';

import { TaskContext } from 'contexts/TaskContext';
import { ShowNewsTickerContext } from 'contexts/ShowNewsTickerContext';

import { Header } from 'components/Header/Header';
import { Main } from 'components/Main/Main';
import { Ticker } from 'components/Ticker/Ticker';

import { AppContainer } from 'ui/components/appUi';
import { Tasks } from 'typings/utils/constantsTypes';

export const App: React.FC = () => {
  const [taskState, setTaskState] = useState<Tasks[]>([]);
  const [isShowNewsTicker, setShowNewsTicker] = useState<boolean>(true);

  const handleTaskState = (value: Tasks[]): void => {
    const sotrArr = value.sort((x, y) => (x.date > y.date ? 1 : -1));

    setTaskState(sotrArr);
    localStorage.setItem('tasksStorage', JSON.stringify(sotrArr));
  };

  const handleShowNewsTicker = (
    boolean: React.SetStateAction<boolean>
  ): void => {
    setShowNewsTicker(boolean);
  };

  useEffect(() => {
    const tasksStorage = localStorage.getItem('tasksStorage');

    if (taskState.length === 0 && tasksStorage) {
      setTaskState(JSON.parse(tasksStorage));
    }
  }, [taskState]);

  return (
    <TaskContext.Provider value={taskState}>
      <ShowNewsTickerContext.Provider value={isShowNewsTicker}>
        <AppContainer>
          <Header
            handleTaskState={handleTaskState}
            handleShowNewsTicker={handleShowNewsTicker}
          />

          <Main handleTaskState={handleTaskState} />

          {isShowNewsTicker && <Ticker />}
        </AppContainer>
      </ShowNewsTickerContext.Provider>
    </TaskContext.Provider>
  );
};
