import { combineReducers } from 'redux';

import link from '../reducers/link/link';
import user from '../reducers/user/user';

export default combineReducers({
  link,
  user
});