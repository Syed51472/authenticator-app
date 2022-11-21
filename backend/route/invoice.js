const express = require("express");
const { invoiceHandler } = require("../controllers/invoiceController.js");

let route = express.Router();

route.post("/addInvoice", invoiceHandler);

module.exports = route;
