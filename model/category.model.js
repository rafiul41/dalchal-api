const mongoose = require('mongoose');
const categorySchema = require('../schema/category.schema');


const Category = mongoose.model('Category', new mongoose.Schema(categorySchema));

module.exports = Category;
