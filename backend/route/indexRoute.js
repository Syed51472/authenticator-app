const express = require("express");
const authRoute = require("./auth.js");
const invoiceRoute = require("./invoice.js");

let router = express.Router();

router.use("/auth", authRoute);
router.use("/invoice", invoiceRoute);

module.exports = router;
