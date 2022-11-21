const db = require("../models");

const Invoice = db.invoices;

async function invoiceHandler(req, res) {
  let { Cname, email, phone, itemName, itemPrice } = req.body;

  let info = {
    Cname: Cname,
    email: email,
    phone: phone,
    itemName: itemName,
    itemPrice: itemPrice,
  };

  let newInvoice = await Invoice.create(info);
  console.log(newInvoice);
  return res.status(200).send({ message: "Invoice added Successfully" });
}

module.exports = { invoiceHandler };
