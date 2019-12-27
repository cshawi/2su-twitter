const router = require("express").Router();
const tweetsRoutes = require('./tweets.routes');
const usersRoutes = require('./users.routes');
const authRoutes = require('./auth.routes');
const auth = require('../middlewares/auth.middleware')

router.use('/tweets', auth, tweetsRoutes);
router.use('/users', usersRoutes);
router.use('/auth', authRoutes);

router.get('/', (req, res)=>{
  res.redirect('/tweets');
});

module.exports = router;