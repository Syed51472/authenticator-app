const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcryptjs");

const User = db.users;

async function signupHandler(req, res) {
  let { email, password, name, role } = req.body;
  var salt = bcrypt.genSaltSync(10);

  var passwordHash = bcrypt.hashSync(password, salt);

  let isAvailable = await User.findOne({
    where: { email: email },
  });

  if (isAvailable) {
    res.status(400).send({ message: "User already exists" });
  } else {
    let info = {
      email: email,
      password: password,
      name: name,
      role: role,
    };

    let newUser = await User.create(info);
    console.log(newUser);
    return res.status(200).send({ message: "User Created Successfully" });
  }
}

async function loginHandler(req, res) {
  let { email, password } = req.body;
  let isAvailable = await User.findOne({
    where: {
      email: email,
    },
  });

  if (!isAvailable) {
    res.status(400).send({ message: "User not exists" });
  }

  let passMatch = bcrypt.compareSync(password, isAvailable.password);

  if (!passMatch) {
    res.status(400).send({ message: "Password is incorrect" });
  } else {
    // let info = {
    //     status: "Valid",
    //   };

    console.log("Hitted");
    return res.status(200).send({ message: "User login successfully" });
  }
}

module.exports = { loginHandler, signupHandler };
