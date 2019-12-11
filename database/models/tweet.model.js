const mongoose = require('mongoose');

const schema = mongoose.Schema({
  content: {
    type: String,
    maxlength: [140, 'Tweet too long'],
    minlength: [1, 'Tweet too short'],
    required: true
  }
}) 

const Tweet = mongoose.model('Tweet', schema);

module.exports = Tweet;