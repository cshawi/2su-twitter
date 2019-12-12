const queries = require('../queries/tweets.queries');

exports.viewList = async (req, res, next) => {
  try {
    const tweets = await queries.all();
    res.render("tweets/tweet", { tweets });
  } catch (e) {
    next(e);
  }
}

exports.viewNew = async (req, res, next) => {
  try {
    res.render("tweets/tweet-form", {});
  } catch (e) {
    next(e);
  }
}

exports.viewEdit = async (req, res, next) => {
  try {
    const tweet = await queries.get(req.params.id)
    res.render('tweets/tweet-form', { tweet })
  } catch (e) {
    next(e);
  }
}

exports.create = async (req, res, next) => {
  try {
    await queries.create(req.body);
    res.redirect('/tweets');
  } catch (e) {
    const errors = Object.keys(e.errors).map(key => e.errors[key].message);
    res.render('tweets/tweet-form', { errors });
  }
}

exports.read = async (req, res, next) => {
  try {
    
  } catch (e) {
    next(e);
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
    res.render('tweets/tweet-form', { errors, tweet: tweet });
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