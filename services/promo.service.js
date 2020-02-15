const PromoModel = require('../models/promo.model');

class PromoService {
  addPromo(promo) {
    return PromoModel
      .create(promo)
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }

  getPromo(code) {
    return PromoModel
      .findOne({code})
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }
}

module.exports = PromoService;
