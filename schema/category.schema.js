const mongoose = require('mongoose');

module.exports = {
  name: String,
  background: String,
  subCategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  isRoot: Boolean,
  isChild: Boolean
};
