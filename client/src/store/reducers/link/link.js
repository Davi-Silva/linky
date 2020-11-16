import update from 'immutability-helper';

const initialState = {
  data: [],
  loading: false,
  fetched: false,
  error: false
};

export default function link(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
