const orderModel = require('../models/order.model');

class OrderService {
  addOrder(order) {
    return orderModel
      .create(order)
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  getUserOrders(userId) {
    return orderModel
      .find({userId})
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }
}

module.exports = OrderService;
