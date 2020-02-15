const mongoose = require('mongoose');

module.exports = {
  date: Date,
  timeRange: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  cart: Object
};
