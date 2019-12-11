const Tweet = require('../database/models/tweet.model');

exports.all = async () => {
  return Tweet.find({}).exec();
}

exports.create = async (content) => {
  const newTweet = new Tweet(content);
  return newTweet.save();
}

exports.delete = async (id) => {
  return Tweet.findByIdAndDelete(id).exec();
}