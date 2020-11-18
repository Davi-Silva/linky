export function getLinks(userId) {
  return {
    type: 'REQUEST_GET_LINKS',
    payload: {
      userId
    }
  };
}
