const express = require("express");
const route = express.Router();

const loginController = require("../app/controllers/LoginController");

route.use("/", loginController.index);

module.exports = route;
