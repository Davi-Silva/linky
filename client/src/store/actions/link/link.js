export function getLink(id) {
  return {
    type: 'REQUEST_GET_LINK',
    payload: {
      id
    }
  };
}
