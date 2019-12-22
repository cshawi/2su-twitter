const router = require("express").Router();
const controller = require('../controllers/users.controller');
const guard = require('../config/guards.config');

router.get("/signup/form", controller.viewSignUpForm);
router.post('/signup', controller.signUp);
router.post('/update/image', guard.ensureAuthenticated, controller.uploadImage);
//router.get('/edit/:id', controller.viewEdit);

//router.post('/', controller.create);
//router.delete('/:id', controller.delete);
//router.post('/update/:id', controller.update);

module.exports = router;