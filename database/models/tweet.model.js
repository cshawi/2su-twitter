const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  content: {
    type: String,
    maxlength: [140, 'Tweet too long'],
    minlength: [1, 'Tweet too short'],
    required: true
  }
}) 

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;