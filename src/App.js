import React from 'react';
import {Provider} from 'react-redux';
import ReduxStore from './redux/Store';
import RootAccess from './Root';

const App = () => {
  return (
    <Provider store={ReduxStore}>
      <RootAccess />
    </Provider>
  );
};

export default App;
