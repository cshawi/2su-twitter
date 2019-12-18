//const queries = require('../queries/tweets.queries');

exports.signinForm = (req, res, next) => {
  try {
      res.render('signin-form', {errors: null});
  } catch(e) {
    next(e);
  }
};

exports.signin = (req, res, next) => {
  res.end();
};

exports.signout = (req, res, next) => {
  res.end();
};