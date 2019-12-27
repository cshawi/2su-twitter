const jwt = require("jsonwebtoken")
const User = require("../database/models/user.model")

const guard = (req, res, next) => {

  if(req.isAuthenticated()){
    next();
  } else {
    res.redirect('/auth/signin/form');
  }
}

module.exports = guard;