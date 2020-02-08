const ProductService = require('./../services/product.service');
const productService = new ProductService();
const express = require('express');
const router = express.Router();
const util = require('./../helpers/util');

router.get('/product', (req, res) => {
    return productService
      .getProductsOfCategory(req.query.categoryId)
      .then(data => {
        res.json(util.formatSuccessResponse(data))
      })
      .catch(err => {
        res.json(util.formatErrorResponse(err));
      })
  }
);

router.post('/product', (req, res) => {
  return productService
    .addProduct(req.body)
    .then(data => {
      res.json(util.formatSuccessResponse(data))
    })
    .catch(err => {
      res.json(util.formatErrorResponse(err));
    })
});

module.exports = router;
