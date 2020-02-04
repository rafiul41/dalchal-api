const categoryModel = require('./../model/category.model');
const express = require('express');
const router = express.Router();

router.get('/categories', (req, res) => {
    return categoryModel
      .find()
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err);
      })
  }
);

router.post('/categories', (req, res) => {
  return categoryModel
    .create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
});

module.exports = router;
