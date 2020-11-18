export function loginUser(userObj) {
  return {
    type: 'REQUEST_LOGIN_USER',
    payload: {
      userObj
    }
  };
}

