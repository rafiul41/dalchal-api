const ProductModel = require('../models/product.model');

class ProductService {
  getProductsOfCategory(category) {
    return ProductModel
      .find({category})
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  addProduct(body) {
    return ProductModel
      .create(body)
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  searchProduct(searchString) {
    return ProductModel
      .find({
        name: {
          $regex: '.*' + searchString + '.*',
          $options: 'i'
        }
      })
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }
}

module.exports = ProductService;
