const queries = require('../queries/users.queries.js');

exports.signinForm = (req, res, next) => {
  try {
    if(req.isAuthenticated()) {
      res.redirect('/');
    } else {
      res.render('auth/auth-form', {errors: null});
    }
  } catch(e) {
    next(e);
  }
};

exports.signin = async (req, res, next) => {
  try {
    
    if( !req.isAuthenticated() ) {

      const user = await queries.findByCredentials(req.body.email, req.body.password)
      const token = await user.generateAuthToken();
  
      res.cookie('jwt', token);
    }
    res.redirect('/');
  } catch(e) {
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
    res.redirect('/');
} catch (e) {
    res.status(500).send(e);
}
};