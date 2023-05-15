const path = require("path");
require("dotenv").config();
const express = require("express");
require("./database");

const router = require("./routes");
const cookieParser = require("cookie-parser");
const app = express();

const server = app.listen(process.env.PORTAPP);

module.exports = {
  server,
  app,
};



require("./config/jwt.config");
app.use(cookieParser());


app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);