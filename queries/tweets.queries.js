const Tweet = require('../database/models/tweet.model');

exports.count = () => {
  return Tweet.count().exec()
}

exports.all = () => {
  return Tweet.find({}).exec();
}

exports.get = (id) => {
  return Tweet.findById( id ).exec();
}

exports.create = (content) => {
  const newTweet = new Tweet(content);
  return newTweet.save();
}

exports.update = (id, tweet) => {
  return Tweet.findByIdAndUpdate( id, {$set : tweet}, {runValidators: true} ).exec();
}

exports.delete = (id) => {
  return Tweet.findByIdAndDelete(id).exec();
}