const express = require("express");
const { ValidationError } = require("sequelize");

const { environment } = require("./config");
const isProduction = environment === "production";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
