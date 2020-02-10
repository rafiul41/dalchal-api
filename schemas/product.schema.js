const mongoose = require('mongoose');

module.exports = {
  name: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  count: Number,
  details: String,
  background: String,
  code: {
    type: String,
    index: true,
    unique: true
  },
  cost: Number,
  weight: String
};
