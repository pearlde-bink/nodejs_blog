const express = require("express");
const route = express.Router();

const logoutController = require("../app/controllers/LogoutController");

route.use("/", logoutController.index);

module.exports = route;
