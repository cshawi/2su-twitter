const router = require("express").Router();
const controller = require('../controllers/tweets.controller');

router.get("/", controller.viewList);

router.get('/new', controller.viewNew);

router.post('/', controller.create);

module.exports = router;