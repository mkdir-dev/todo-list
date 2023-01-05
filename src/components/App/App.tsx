import React from 'react';

import { AppContainer } from 'ui/App/App';
import { Header } from 'components/Header/Header';
import { Ticker } from 'components/Ticker/Ticker';

export const App: React.FC = () => (
  <AppContainer>
    <Header />

    <Ticker />
  </AppContainer>
);
