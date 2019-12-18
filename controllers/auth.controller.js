//const queries = require('../queries/tweets.queries');
const passport = require('passport');
exports.signinForm = (req, res, next) => {
  try {
      res.render('auth/auth-form', {errors: null});
  } catch(e) {
    next(e);
  }
};

exports.signin = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) {
      next(err);
    } else if (!user) {
      res.render('auth/auth-form', { errors: [info.message] });
    } else {
      req.login(user, (err) => {
        if(err) next(err);
        else res.redirect('/tweets');
      });
    }
  })(req, res, next)
};

exports.signout = (req, res, next) => {
  req.logout();
  res.redirect('/auth/signin/form');
};