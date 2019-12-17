const router = require("express").Router();
const tweetsRoutes = require('./tweets.routes');
const usersRoutes = require('./users.routes')

router.use('/tweets', tweetsRoutes);
router.use('/users', usersRoutes);

router.get('/', (req, res)=>{
  res.redirect('/tweets');
});

module.exports = router;