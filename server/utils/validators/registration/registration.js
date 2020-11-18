const User = require('../../../models/user/User');

module.exports = {
  validateUser: (names, username, email, password, password2) => {

    let errors = [];

    if (!names.firstName) {
      errors.push('First name is required.');
    } else {
      if (names.firstName.length === 0) {
        errors.push('First name must be valid.')
      }
    }

    if (!names.lastName) {
      errors.push('Last name is required.');
    } else {
      if (names.lastName.length === 0) {
        errors.push('Last name must be valid.')
      }
    }

    if (!username) {
      errors.push('Username is required.');
    } else {
      if (username.length === 0) {
        errors.push('Username must be valid.')
      }
    }

    if (!email) {
      errors.push('Email is required.');
    } else {
      if (email.length === 0) {
        errors.push('Email must be valid.');
      } else {
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(email).toLowerCase())) {
          errors.push('Email must be valid.');
        }
      }
    }

    if (!password) {
      errors.push('Password is required.');
    } else {
      if (password.length === 0) {
        errors.push('Password must be valid.')
      }
    }

    if (!password2) {
      errors.push('Password is required.');
    } else {
      if (password2.length === 0) {
        errors.push('Password must be valid.')
      }
    }

    if (password !== password2) {
      errors.push('Passwords must match');
    }

    if (errors.length > 0) {
      return {
        errors,
        valid: false
      };
    } else {
      return {
        errors: [],
        valid: true
      }
    }
  },

  validateUsername: async (username) => {
    try {
      const userObj = await User.findOne({
        username
      });

      if (userObj) {
        return false;
      }
      return true;
    } catch (err) {
      console.error(err.message)
    }
  }
}