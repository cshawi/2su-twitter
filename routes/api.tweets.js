const router = require("express").Router();
const Tweet = require('../database/models/tweet.model')

router.post('/', (req, res) => {
  const body = req.body;
  const tweet = new Tweet(body);
  tweet.save()
    .then( tweet => res.redirect('/'))
    .catch (err => {
      const errors = Object.keys(err.errors).map(key => err.errors[key].message);
      res.render('tweet/tweet-form', { errors });
    })
});

module.exports = router;