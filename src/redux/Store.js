import {configureStore} from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import RootReducer from './RootReducers';

export default configureStore({
  reducer: RootReducer,
  middleware: [thunk],
});
