const jwt = require("jsonwebtoken")
const User = require("../database/models/user.model")

const auth = async (req, res, next) => {

  req.isAuthenticated = () => !!req.user; 

  try {
      
      //const token = req.header("Authorization").replace("Bearer ", "");
      //On utilise ici le cookie pour sauvegarder le JWT
      const token = req.cookies.jwt;

      if(token) {
        req.token = token;

        const decoded = jwt.verify( token, process.env.JWT_SECRET );
        const user = await User.findOne({_id: decoded._id, "credentials.tokens.token": token});
     
        if(user) req.user = user;
     
      }

      next();

  } catch (e) {
      //res.status(401).send({error:"Authentification required"})
      //res.redirect('/auth/signin/form');
    next(e);
  }
}

module.exports = auth;