const express = require("express");
const router = express.Router();

const loveController = require("../app/controllers/LoveController");

router.use("/loveEm", loveController.loveEm);
router.use("/", loveController.index);

module.exports = router;
