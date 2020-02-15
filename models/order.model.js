const mongoose = require('mongoose');
const orderSchema = require('../schemas/order.schema');

const Order = mongoose.model('Order', new mongoose.Schema(orderSchema));

module.exports = Order;
