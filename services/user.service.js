const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

class UserService {
  authenticate(body) {
    return userModel
      .findOne({mobileNumber: body.mobileNumber})
      .then(user => {
        if (!user) {
          return Promise.reject({message: "User not found"});
        }
        if (user._doc.password !== body.password) {
          return Promise.reject({message: "Password doesn't match"});
        }
        const token = jwt.sign(user._doc, 'secretKey');
        return Promise.resolve({token, user: user._doc});
      })
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  register(user) {
    return userModel
      .create(user)
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }
}

module.exports = UserService;
