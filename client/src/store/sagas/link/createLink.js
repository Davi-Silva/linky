import { call, put } from 'redux-saga/effects';

const createLink = async (url) => {
  const res = await fetch(
    `${process.env.REACT_APP_BACK_END_API}/links/create`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ originalURL: url })
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncCreateLinkApi(action) {
  try {
    const response = yield call(createLink, action.payload.url);
    console.log('response:', response)

    if (response.status_code === 200) {
      console.log('done')
      yield put({ type: 'SUCCESS_CREATE_LINK', payload: { data: response } });
    } else {
      yield put({ type: 'FAILURE_CREATE_LINK' });
    }
  } catch (err) {
    console.error(err)
    yield put({ type: 'FAILURE_CREATE_LINK' });
  }
}
