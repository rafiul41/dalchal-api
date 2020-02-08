const productModel = require('../models/product.model');

class ProductService {
  getProductsOfCategory(category) {
    return productModel
      .find({category})
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  addProduct(body) {
    return productModel
      .create(body)
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }
}

module.exports = ProductService;
