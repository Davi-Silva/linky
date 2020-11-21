export function getLinks(userId) {
  return {
    type: 'REQUEST_GET_LINKS',
    payload: {
      userId
    }
  };
}

export function clearLinks() {
  return {
    type: 'CLEAR_LINKS',
  };
}
