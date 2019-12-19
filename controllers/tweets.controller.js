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
    res.render("tweets/tweet-form", { tweet: null , isAuthenticated: req.isAuthenticated(), currentUser: req.user});
  } catch (e) {
    next(e);
  }
}

exports.viewEdit = async (req, res, next) => {
  try {
    const tweet = await queries.get(req.params.id)
    res.render('tweets/tweet-form', { tweet, isAuthenticated: req.isAuthenticated(), currentUser: req.user })
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
    const errors = Object.keys(e.errors).map(key => e.errors[key].message);
    res.render('tweets/tweet-form', { errors, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
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
    res.render('tweets/tweet-form', { errors, tweet: tweet, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
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