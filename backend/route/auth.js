const express = require("express");
const {
  loginHandler,
  signupHandler,
} = require("../controllers/authController.js");

let route = express.Router();

route.post("/signup", signupHandler);
route.post("/login", loginHandler);

module.exports = route;
