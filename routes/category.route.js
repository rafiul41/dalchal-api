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
        console.log(err);
      })
  }
);

module.exports = router;
