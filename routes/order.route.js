const OrderService = require('./../services/order.service');
const orderService = new OrderService();
const express = require('express');
const router = express.Router();
const util = require('./../helpers/util');

router.post('/order', (req, res) => {
    return orderService
      .addOrder(req.body)
      .then(data => {
        res.json(util.formatSuccessResponse(data))
      })
      .catch(err => {
        res.json(util.formatErrorResponse(err));
      })
  }
);

router.get('/order', (req, res) => {
    return orderService
      .getUserOrders(req.query.userId)
      .then(data => {
        res.json(util.formatSuccessResponse(data))
      })
      .catch(err => {
        res.json(util.formatErrorResponse(err));
      })
  }
);

module.exports = router;
