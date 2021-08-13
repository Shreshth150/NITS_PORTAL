const express = require("express");
const route = express.Router();

const Services = require("../services/render");


route.get("/", Services.homeRoute);



module.exports = route