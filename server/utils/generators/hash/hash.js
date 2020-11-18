const bcrypt = require('bcryptjs');

module.exports = {
  generateHash: async (string) => {
    bcrypt.genSaltSync(10, (errGenSalt, salt) => {
      if (errGenSalt) throw errGenSalt;

      bcrypt.hash(string, salt, (errHash, hash) => {
        if (errHash) throw errHash;

        return hash;
      });
    });
  }
}