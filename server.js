const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes/api")

const PORT = process.env.PORT || 3333;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

