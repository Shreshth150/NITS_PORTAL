const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const ejs = require("ejs");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080

app.set("view engine", "ejs");

app.use(morgan("tiny"));

app.use(bodyparser.urlencoded({ extended: true }));


app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));



app.use("/", require("./server/routes/router"));


app.listen(3000);