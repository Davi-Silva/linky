const { v4 } = require('uuid');
const crypto = require('crypto');

module.exports = {
  generateRandomUsername: (username) => {
    const random = v4();

    let finalUuid = '';
    random.split('-').map((string) => {
      finalUuid += string[0];
    })
    return `${username}-${finalUuid}`;
  },

  generateUniqueId: (numberOfBytes, encode, subEncode = 36) => {
    return crypto.randomBytes(numberOfBytes).toString(encode).toString(subEncode);
  }
}