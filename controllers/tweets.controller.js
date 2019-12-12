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
    res.render("tweets/tweet-form", {}); //FIXME: Static form location doesn't work (tweets/tweet-form)
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
  try {
    
  } catch (e) {
    next(e);
  }
}

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.id;
    await queries.delete(id);
    const tweets = await queries.all();
    //FIXME: Partials doesn't execute javascript
    res.render('partials/tweet-list', {tweets, layout: false});
    //res.redirect('/tweets/');
  } catch (e) {
    next(e);
  }
}