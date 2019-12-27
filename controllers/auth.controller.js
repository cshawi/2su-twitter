const queries = require('../queries/users.queries.js');

exports.signinForm = (req, res, next) => {
  try {
      res.render('auth/auth-form', {errors: null});
  } catch(e) {
    next(e);
  }
};

exports.signin = async (req, res, next) => {
  try {
    const user = await queries.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken();

    res.cookie('jwt', token);
    res.redirect('/');
    //res.render('tweets/tweet', { isAuthenticated: true, currentUser: user })
  } catch(e) {
    //FIXME: Find out why the e error is a single error an not an array like in tweets
    //const errors = Object.keys(e.errors).map(key => e.errors[key].message);
    res.render('auth/auth-form', { errors: [e.message] });
  }
};

exports.signout = async (req, res, next) => {
  try {
    
    req.user.credentials.tokens = req.user.credentials.tokens.filter( (token)=> {
      return token.token !== req.token;
    });
    
    await req.user.save();
    
    res.clearCookie('jwt');
    res.redirect('auth/signin/form');
} catch (e) {
    res.status(500).send(e);
}
};