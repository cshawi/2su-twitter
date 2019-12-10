const Tweet = require('../database/models/tweet.model');

exports.viewList = async (req, res, next) => {
  try {
    const tweets = await Tweet.find({}).exec()
    res.render("tweets/tweet-list", { tweets });
  } catch (e) {
    next(e);
  }
}

exports.viewNew = async (req, res, next) => {
  try {
    res.render("tweets/tweet-form", {}); //FIXME: Static form location doesn't work (tweets/tweet-form)
  } catch (e) {
    next(e);
  }
}

exports.create = async (req, res, next) => {
  try {
    const tweet = new Tweet(req.body);
    await tweet.save();
    res.redirect('/');
  } catch (e) {
    const errors = Object.keys(e.errors).map(key => e.errors[key].message);
    res.render('tweets/tweet-form', { errors });
  }
}

exports.read = async (req, res, next) => {
  try {
    
  } catch (e) {
    
  }
}

exports.update = async (req, res, next) => {
  try {
    
  } catch (e) {
    
  }
}

exports.delete = async (req, res, next) => {
  try {
    
  } catch (e) {
    
  }
}