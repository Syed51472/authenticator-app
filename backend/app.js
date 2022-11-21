const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const indexRoute = require("./route/indexRoute.js");
const sequelize = require("./models/index.js");

var app = express();

var corOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,PATCH,POST,DELETE,OPTIONS"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", indexRoute);

app.get("/", (req, res) => {
  res.json({ message: "Server is Running..." });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is connected at port ${PORT}`);
});
