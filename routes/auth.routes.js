const router = require("express").Router();
const controller = require('../controllers/auth.controller');
const guard = require('../middlewares/guard.middleware');

router.get('/signin/form', controller.signinForm);
router.post('/signin/', controller.signin);
router.get('/signout', guard, controller.signout);

module.exports = router;