const router = require("express").Router();
const tweetsRoute = require('./tweets.route');

router.use('/tweets', tweetsRoute);

router.get('/', (req, res)=>{
  res.redirect('/tweets');
});

module.exports = router;