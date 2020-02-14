const UserService = require('./../services/user.service');
const userService = new UserService();
const express = require('express');
const router = express.Router();
const util = require('./../helpers/util');

router.post('/user/authenticate', (req, res) => {
    return userService
      .authenticate(req.body)
      .then(data => {
        res.json(util.formatSuccessResponse(data))
      })
      .catch(err => {
        res.json(util.formatErrorResponse(err));
      })
  }
);

router.post('/user/register', (req, res) => {
    return userService
      .register(req.body)
      .then(data => {
        res.json(util.formatSuccessResponse(data))
      })
      .catch(err => {
        res.json(util.formatErrorResponse(err));
      })
  }
);

router.get('/user/:mobileNumber', (req, res) => {
  return userService
    .getUser(req.params.mobileNumber)
    .then(data => {
      res.json(util.formatSuccessResponse(data))
    })
    .catch(err => {
      res.json(util.formatErrorResponse(err));
    })
});

module.exports = router;
