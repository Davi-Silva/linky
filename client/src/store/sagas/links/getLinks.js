import { call, put } from 'redux-saga/effects';

const getLinks = async (userId) => {
  const res = await fetch(
    `${process.env.REACT_APP_BACK_END_API}/links/user/${userId}`,
    {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('accessToken')}`
      },
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncGetLinkApi(action) {
  try {
    const response = yield call(getLinks, action.payload.userId);

    if (response.status_code === 200) {
      yield put({ type: 'SUCCESS_GET_LINKS', payload: { data: response.results } });
    } else {
      yield put({ type: 'FAILURE_GET_LINKS' });
    }
  } catch (err) {
    console.error(err)
    yield put({ type: 'FAILURE_GET_LINKS' });
  }
}
