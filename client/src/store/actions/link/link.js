export function getLink(id) {
  return {
    type: 'REQUEST_GET_LINK',
    payload: {
      id
    }
  };
}

export function createLink(url) {
  return {
    type: 'REQUEST_CREATE_LINK',
    payload: {
      url
    }
  };
}

export function clearLink() {
  return {
    type: 'CLEAR_LINK',
  };
}
