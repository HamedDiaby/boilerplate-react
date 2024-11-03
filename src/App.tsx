import React from 'react';
import { Navigations } from '@navigation';
import { AppContextProvider } from '@contexts';


const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Navigations />
    </AppContextProvider>
  );
}

export default App;
