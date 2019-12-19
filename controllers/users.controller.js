const queries = require('../queries/users.queries');

exports.viewSignUpForm = (req, res, next) => {
  res.render('users/user-form', {errors: null, isAuthenticated: req.isAuthenticated(), currentUser: req.user});
}

exports.signUp = async (req, res, next) => {
  try {
    const user = await queries.create(req.body);
    res.redirect('/');
  } catch (e) {
    res.render('users/user-form', {errors: [ e.message ], isAuthenticated: req.isAuthenticated(), currentUser: req.user});
  }
}