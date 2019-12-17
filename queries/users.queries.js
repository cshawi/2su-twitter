const User = require('../database/models/user.model');

exports.all = () => {
  
}

exports.get = (id) => {
  
}

exports.create = async (user) => {
  try{
    const hashedPassword = await User.hashPassword(user.password);
    const newUser = new User({
        username : user.username,
        local: {
          email: user.email,
          password: hashedPassword
        }
    });
    return newUser.save();
  } catch(e) {
    throw(e);
  }
}

exports.update = (id, tweet) => {
  
}

exports.delete = (id) => {
  
}