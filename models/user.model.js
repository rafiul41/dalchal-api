const mongoose = require('mongoose');
const userSchema = require('../schemas/user.schema');

const User = mongoose.model('User', new mongoose.Schema(userSchema));

module.exports = User;
