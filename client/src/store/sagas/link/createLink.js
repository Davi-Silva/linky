import { call, put } from 'redux-saga/effects';

const createLink = async (userId, url) => {
  const res = await fetch(
    `${process.env.REACT_APP_BACK_END_API}/link/create`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, originalURL: url })
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncCreateLinkApi(action) {
  try {
    const response = yield call(createLink, action.payload.userId, action.payload.url);

    if (response.status_code === 200) {
      yield put({ type: 'SUCCESS_CREATE_LINK', payload: { data: response } });
    } else {
      yield put({ type: 'FAILURE_CREATE_LINK' });
    }
  } catch (err) {
    console.error(err)
    yield put({ type: 'FAILURE_CREATE_LINK' });
  }
}
