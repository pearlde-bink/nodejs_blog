const express = require("express");
const route = express.Router();
const isLoggedIn = require("../index");

const secretController = require("../app/controllers/SecretController");

// route.use('/', isLoggedIn, secretController.index)

module.exports = route;
