const User = require('../database/models/user.model'); 
const bcrypt = require('bcrypt');

exports.create = async (user) => {
  try{
    const hashedPassword = await User.hashPassword(user.password);
    const newUser = new User({
        username : user.username,
        credentials: {
          email: user.email,
          password: hashedPassword
        }
    });
    return newUser.save();
  } catch(e) {
    throw(e);
  }
}

exports.findUserPerEmail = (email) => {
  return User.findOne( { 'credentials.email' : email }).exec();
}

exports.findUserPerId = (id) => {
  return User.findById(id).exec();
}

exports.findByCredentials = async (email, password) => {
  const user = await User.findOne({ 'credentials.email': email  })
  if(!user) throw new Error("Invalid credantials")

  const isMatch = await bcrypt.compare(password, user.credentials.password)

  if(!isMatch) throw new Error("Invalid credantials")

  return user
};

