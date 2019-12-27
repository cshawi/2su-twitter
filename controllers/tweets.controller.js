const queries = require('../queries/tweets.queries');

exports.viewList = async (req, res, next) => {
  try {
    const tweets = await queries.all();
    res.render("tweets/tweet", { tweets, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
  } catch (e) {
    next(e);
  }
}

exports.viewNew = async (req, res, next) => {
  try {
    const count = await queries.count();
    res.render("tweets/tweet-form", { tweetCount: count, isAuthenticated: req.isAuthenticated(), currentUser: req.user});
  } catch (e) {
    next(e);
  }
}

exports.viewEdit = async (req, res, next) => {
  try {
    const count = await queries.count();
    const tweet = await queries.get(req.params.id)
    res.render('tweets/tweet-form', { tweetCount: count, tweet, isAuthenticated: req.isAuthenticated(), currentUser: req.user })
  } catch (e) {
    next(e);
  }
}

exports.create = async (req, res, next) => {
  try {
    await queries.create( {
      ...req.body,
      author: req.user._id
    });
    res.redirect('/tweets');
  } catch (e) {
    const count = await queries.count();
    const errors = Object.keys(e.errors).map(key => e.errors[key].message);
    res.render('tweets/tweet-form', { tweetCount: count, errors, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
  }
}

exports.update = async (req, res, next) => {
  const id = req.params.id;
  try {
    await queries.update(req.params.id, req.body)
    res.redirect('/tweets');
  } catch (e) {
    const errors = Object.keys(e.errors).map(key => e.errors[key].message);
    const tweet = await queries.get(id);
    const count = await queries.count();
    res.render('tweets/tweet-form', { tweetCount: count, errors, tweet: tweet, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
  }
}

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.id;
    await queries.delete(id);
    const tweets = await queries.all();
    res.render('partials/tweet-list', {tweets, layout: false});
  } catch (e) {
    next(e);
  }
}