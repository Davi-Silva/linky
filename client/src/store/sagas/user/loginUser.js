import { call, put } from 'redux-saga/effects';

const loginUser = async (userObj) => {
  const res = await fetch(
    `${process.env.REACT_APP_BACK_END_API}/users/login`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj)
    }
  );
  const data = await res.json();
  return data;
}

const getUserInfoFromToken = async (token) => {
  const res = await fetch(
    `${process.env.REACT_APP_BACK_END_API}/users/login/token`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token })
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncLoginUserApi(action) {
  try {
    const response = yield call(loginUser, action.payload.userObj);

    if (response.status_code === 200) {
      if (window.localStorage.getItem('accessToken') !== undefined) {
        window.localStorage.removeItem('accessToken');
      }

      window.localStorage.setItem('accessToken', response.results.accessToken);
      const finalUserInfoResponse = yield call(getUserInfoFromToken, response.results.accessToken);

      yield put({ type: 'SUCCESS_LOGIN_USER', payload: { data: finalUserInfoResponse.results } });
    } else {
      yield put({ type: 'FAILURE_GET_LINK' });
    }
  } catch (err) {
    console.error(err)
    yield put({ type: 'FAILURE_LOGIN_USER' });
  }
}
