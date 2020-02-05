const CategoryService = require('./../services/category.service');
const categoryService = new CategoryService();
const express = require('express');
const router = express.Router();

router.get('/categories', (req, res) => {
    return categoryService
      .getAllCategories()
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err);
      })
  }
);

router.post('/categories', (req, res) => {
  return categoryService
    .addCategory(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
});

module.exports = router;
