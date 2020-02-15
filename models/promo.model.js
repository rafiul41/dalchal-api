const mongoose = require('mongoose');
const promoSchema = require('../schemas/promo.schema');

const Promo = mongoose.model('Promo', new mongoose.Schema(promoSchema));

module.exports = Promo;
