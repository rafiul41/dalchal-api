const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const UserService = require('./../services/user.service');
const userService = new UserService();
const util = require('./../helpers/util');

module.exports = function (passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = 'secretKey';
  const errorResponse = {message: 'Authentication error'};
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    userService
      .findOne({
        mobileNumber: jwt_payload.mobileNumber
      })
      .then(user => {
        if (!user) {
          return Promise.reject(errorResponse);
        }
        return done(null, {_doc: user});
      })
      .catch(err => {
        const error = util.formatErrorResponse(errorResponse, [err.message]);
        return done(error, false);
      });
  }));
};
