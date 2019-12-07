const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = schema({
  content: {
    type: String,
    maxLength: [140, 'Tweet too long'],
    minLength: [1, 'Tweet too short'],
    require: true
  }
}) 

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;