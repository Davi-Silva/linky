import update from 'immutability-helper';

const initialState = {
  data: {},
  loading: false,
  fetched: false,
  error: false
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_LOGIN_USER':
      return update(state, {
        data: { $set: {} },
        loading: { $set: true },
        fetched: { $set: false },
        error: { $set: false }
      });
    case 'SUCCESS_LOGIN_USER':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false }
      });
    case 'FAILURE_LOGIN_USER':
      return update(state, {
        data: { $set: {} },
        loading: { $set: false },
        fetched: { $set: false },
        error: { $set: true }
      });
    case 'REQUEST_DECODE_TOKEN':
      return update(state, {
        data: { $set: {} },
        loading: { $set: true },
        fetched: { $set: false },
        error: { $set: false }
      });
    case 'SUCCESS_DECODE_TOKEN':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false }
      });
    case 'FAILURE_DECODE_TOKEN':
      return update(state, {
        data: { $set: {} },
        loading: { $set: false },
        fetched: { $set: false },
        error: { $set: true }
      });
    case 'REQUEST_LOGOUT_USER':
      return update(state, {
        data: { $set: {} },
        loading: { $set: true },
        fetched: { $set: false },
        error: { $set: false }
      });
    case 'SUCCESS_LOGOUT_USER':
      return update(state, {
        data: { $set: {} },
        loading: { $set: false },
        fetched: { $set: false },
        error: { $set: false }
      });
    case 'FAILURE_LOGOUT_USER':
      return update(state, {
        data: { $set: {} },
        loading: { $set: false },
        fetched: { $set: false },
        error: { $set: false }
      });
    default:
      return state;
  }
}
