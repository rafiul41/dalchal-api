const mongoose = require('mongoose');
const productSchema = require('../schemas/product.schema');

const Product = mongoose.model('Product', new mongoose.Schema(productSchema));

module.exports = Product;
