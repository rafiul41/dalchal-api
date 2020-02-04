const categoryModel = require('../models/category.model');

module.exports = {
  getAllCategories() {
      return categoryModel
        .find()
        .then(data => {
          return Promise.resolve(data);
        })
        .catch(err => {
          return Promise.reject(err);
        })
  },
  addCategory(body) {
    return categoryModel
      .create(body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      })
  }
};
