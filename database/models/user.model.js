const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = mongoose.Schema({
  username: {type: String, required: true},
  local: {
      email: {type: String, required: true},
      password: {type: String, required: true}
  }
})

schema.statics.hashPassword = (password) => {
  return bcrypt.hash(password, 12);
}

const User = mongoose.model('User', schema);


module.exports = User;