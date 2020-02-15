const PromotService = require('./../services/promo.service');
const promoService = new PromotService();
const express = require('express');
const router = express.Router();
const util = require('./../helpers/util');

router.get('/promo', (req, res) => {
    return promoService
      .getPromo(req.query.code)
      .then(data => {
        res.json(util.formatSuccessResponse(data))
      })
      .catch(err => {
        res.json(util.formatErrorResponse(err));
      })
  }
);

router.post('/promo', (req, res) => {
  return promoService
    .addPromo(req.body)
    .then(data => {
      res.json(util.formatSuccessResponse(data))
    })
    .catch(err => {
      res.json(util.formatErrorResponse(err));
    })
});

module.exports = router;
