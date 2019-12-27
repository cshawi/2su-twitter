const router = require("express").Router();
const tweetsRoutes = require('./tweets.routes');
const usersRoutes = require('./users.routes');
const authRoutes = require('./auth.routes');

const guard = require('../middlewares/guard.middleware');

router.use('/tweets', guard, tweetsRoutes);
router.use('/users', usersRoutes);
router.use('/auth', authRoutes);

router.get('/', (req, res)=>{
  res.redirect('/tweets');
});

module.exports = router;