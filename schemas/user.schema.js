module.exports = {
  name: String,
  addresses: [String],
  password: String,
  coupons: [String],
  mobileNumber: {
    type: String,
    index: true,
    unique: true
  }
};
