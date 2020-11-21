import { combineReducers } from 'redux';

import link from '../reducers/link/link';
import links from '../reducers/links/links';
import user from '../reducers/user/user';
import navbar from '../reducers/navbar/navbar';
import app from '../reducers/app/app';

export default combineReducers({
  link,
  links,
  user,
  navbar,
  app
});