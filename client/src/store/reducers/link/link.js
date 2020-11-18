import update from 'immutability-helper';

const initialState = {
  data: [],
  loading: false,
  fetched: false,
  error: false
};

export default function link(state = initialState, action) {
  switch (action.type) {
    case 'CLEAR_LINK':
      return update(state, {
        data: { $set: {} },
        loading: { $set: false },
        fetched: { $set: false },
        error: { $set: false }
      });
    case 'REQUEST_GET_LINK':
      return update(state, {
        data: { $set: {} },
        loading: { $set: true },
        fetched: { $set: false },
        error: { $set: false }
      });
    case 'SUCCESS_GET_LINK':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false }
      });
    case 'FAILURE_GET_LINK':
      return update(state, {
        data: { $set: {} },
        loading: { $set: false },
        fetched: { $set: false },
        error: { $set: true }
      });
    case 'REQUEST_CREATE_LINK':
      return update(state, {
        data: { $set: {} },
        loading: { $set: true },
        fetched: { $set: false },
        error: { $set: false }
      });
    case 'SUCCESS_CREATE_LINK':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false }
      });
    case 'FAILURE_CREATE_LINK':
      return update(state, {
        data: { $set: {} },
        loading: { $set: false },
        fetched: { $set: false },
        error: { $set: true }
      });
    default:
      return state;
  }
}
