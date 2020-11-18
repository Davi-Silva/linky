export function getLink(id) {
  return {
    type: 'REQUEST_GET_LINK',
    payload: {
      id
    }
  };
}

export function createLink(userId, url) {
  return {
    type: 'REQUEST_CREATE_LINK',
    payload: {
      userId,
      url
    }
  };
}

export function clearLink() {
  return {
    type: 'CLEAR_LINK',
  };
}
