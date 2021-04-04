import {combineReducers} from 'redux';

import GlobalReducers from './global/GlobalReducers';

export default combineReducers({
  Global: GlobalReducers,
});
