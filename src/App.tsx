import React from 'react';
import { Provider } from '~store/store';
import RootNavigator from '~navigation/RootNavigator';

const App = () => {
  return (
    <Provider>
      <RootNavigator />
    </Provider>
  );
};

export default App;
