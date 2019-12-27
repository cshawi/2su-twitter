const router = require("express").Router();
const controller = require('../controllers/auth.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/signin/form', controller.signinForm);
router.post('/signin/', controller.signin);
router.get('/signout', auth, controller.signout);

module.exports = router;