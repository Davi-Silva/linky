import {all, takeLatest} from 'redux-saga/effects';

import GetLink from './link/getLink'

export default function* root() {
  yield all([
    takeLatest('REQUEST_GET_LINK', GetLink),
  ])
}