const router = require("express").Router();
const controller = require('../controllers/auth.controller');

router.get('/signin/form', controller.signinForm);
router.post('/signin/', controller.signin);
router.get('/signout', controller.signout);

module.exports = router;