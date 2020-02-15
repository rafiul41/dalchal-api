const OrderModel = require('../models/order.model');

class OrderService {
  addOrder(order) {
    return OrderModel
      .create(order)
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  getUserOrders(userId) {
    return OrderModel
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
