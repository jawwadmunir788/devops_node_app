const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.home);
router.get("/health", controller.health);

module.exports = router;
