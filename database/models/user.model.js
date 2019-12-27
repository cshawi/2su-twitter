const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const schema = mongoose.Schema({
  username: {
    type: String, 
    required: true,
    unique: true
  },
  credentials: {
      email: {
        type: String, 
        required: true, 
        unique: true
      },
      password: {
        type: String, 
        required: true
      }, 
      tokens: [
        {
          token: {
            type: String,
            required: true
          }
        }]
  },
  avatar: {
    type: String,
    default: '/images/default-profile.svg'
  }
})

schema.statics.hashPassword = (password) => {
  return bcrypt.hash(password, 12);
}

schema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.credentials.password);
}

schema.methods.generateAuthToken = async function() {
  const token = jwt.sign( { _id: this._id.toString() }, process.env.JWT_SECRET );
  this.credentials.tokens = this.credentials.tokens.concat({token});
  await this.save();
  return token
}



const User = mongoose.model('User', schema);


module.exports = User;