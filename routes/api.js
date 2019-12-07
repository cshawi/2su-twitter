const router = require("express").Router();
const tweetsRoute = require('./api.tweets');

router.use("/tweets", tweetsRoute);


module.exports = router;