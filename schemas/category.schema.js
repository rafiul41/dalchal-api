const mongoose = require('mongoose');

module.exports = {
  name: {
    type: String,
    unique: true,
    index: true
  },
  url: {
    type: String,
    unique: true,
    index: true
  },
  background: String,
  subCategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  isRoot: Boolean,
  isChild: Boolean
};
