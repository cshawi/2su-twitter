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
  try {
    const { email, password } = req.body;
    const user = await findUserPerEmail(email);
    if (user) {
      const match = await user.comparePassword(password);
      if (match) {
        req.login(user);
        res.redirect('/tweets');
      } else {
        res.render('auth/auth-form', { error: 'Wrong password' });
      }
    } else {
      res.render('auth/auth-form', { error: 'User not found' });
    }
  } catch(e) {
    next(e);
  }
};

exports.signout = (req, res, next) => {
  req.logout();
  res.redirect('/auth/signin/form');
};