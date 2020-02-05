const CategoryService = require('./../services/category.service');
const categoryService = new CategoryService();
const express = require('express');
const router = express.Router();
const util = require('./../helpers/util');

router.get('/categories', (req, res) => {
    return categoryService
      .getAllCategories()
      .then(data => {
        res.json(util.formatSuccessResponse(data))
      })
      .catch(err => {
        res.json(util.formatErrorResponse(err));
      })
  }
);

router.post('/categories', (req, res) => {
  return categoryService
    .addCategory(req.body)
    .then(data => {
      res.json(util.formatSuccessResponse(data))
    })
    .catch(err => {
      res.json(util.formatErrorResponse(err));
    })
});

module.exports = router;
