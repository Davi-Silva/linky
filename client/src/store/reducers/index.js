import { combineReducers } from 'redux';

import link from '../reducers/link/link';
import links from '../reducers/links/links';
import user from '../reducers/user/user';

export default combineReducers({
  link,
  links,
  user
});