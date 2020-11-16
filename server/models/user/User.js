const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  names: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    require: true,
  },
  isVerified: {
    type: Boolean,
    required: false,
    default: false,
  },
  deletion: {
    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
    when: {
      type: Date,
      required: false,
    },
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    required: false,
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
