const mongoose = require('mongoose');

module.exports = () => {
  const uri = process.env.DATABASE_URI + process.env.DATABASE_NAME;
  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('Database Connection is established successfully. :D');
    })
    .catch(err => {
      console.log(err);
      console.log('Database connection is not established !! :(');
    });
};
