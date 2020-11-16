const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
  originalURL: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now()
  }
});

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;
