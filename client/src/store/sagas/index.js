import {all, takeLatest} from 'redux-saga/effects';

import GetLink from './link/getLink';
import CreateLink from './link/createLink';

import LoginUser from './user/loginUser';

export default function* root() {
  yield all([
    takeLatest('REQUEST_GET_LINK', GetLink),
    takeLatest('REQUEST_CREATE_LINK', CreateLink),

    takeLatest('REQUEST_LOGIN_USER', LoginUser),
  ])
}