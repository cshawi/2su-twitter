const router = require("express").Router();
const controller = require('../controllers/tweets.controller');

router.get("/", controller.viewList);
router.get('/new', controller.viewNew);
router.get('/edit/:id', controller.viewEdit);

router.post('/', controller.create);
router.delete('/:id', controller.delete);
router.post('/update/:id', controller.update);

module.exports = router;