const { v1, v2, v3, v4, v5 } = require('uuid');

module.exports = {
  generateRandomUsername: (username) => {
    const random = v4();

    let finalUuid = '';
    random.split('-').map((string) => {
      finalUuid += string[0];
    })
    return `${username}-${finalUuid}`;
  }
}