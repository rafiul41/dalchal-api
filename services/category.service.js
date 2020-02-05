const categoryModel = require('../models/category.model');

class CategoryService {
  async populateSubCategories(category) {
    const populatedCategory = await categoryModel.populate(category, {path: 'subCategories'});
    const promises = [];
    populatedCategory._doc.subCategories.forEach(async subCategory => {
      promises.push(this.populateSubCategories(subCategory));
    });
    await Promise.all(promises);
  }

  getAllCategories() {
    let categories = [];
    return categoryModel
      .find({isRoot: true})
      .then(data => {
        categories = data;
        const promises = [];
        data.forEach(category => {
          promises.push(this.populateSubCategories(category));
        });
        return Promise.all(promises);
      })
      .then(() => {
        return Promise.resolve(categories);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

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
}

module.exports = CategoryService;
