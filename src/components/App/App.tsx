import React, { useState } from 'react';

import { ShowNewsTickerContext } from 'contexts/ShowNewsTickerContext';

import { Header } from 'components/Header/Header';
import { Ticker } from 'components/Ticker/Ticker';

import { AppContainer } from 'ui/App/App';

export const App: React.FC = () => {
  const [isShowNewsTicker, setShowNewsTicker] = useState<boolean>(false);

  const handleShowNewsTicker = (
    boolean: React.SetStateAction<boolean>
  ): void => {
    setShowNewsTicker(boolean);
  };

  return (
    <ShowNewsTickerContext.Provider value={isShowNewsTicker}>
      <AppContainer>
        <Header handleShowNewsTicker={handleShowNewsTicker} />

        {isShowNewsTicker && <Ticker />}
      </AppContainer>
    </ShowNewsTickerContext.Provider>
  );
};
