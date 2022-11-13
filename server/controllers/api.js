const express = require("express");
const apiRouter = express.Router();

const mongoose = require("mongoose");

const url = process.env.DBURL;

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to server");
  })
  .catch((err) => console.log(err));


module.exports = apiRouter;
