"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//jshint esversion:6
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const router_1 = __importDefault(require("./routes/router"));
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, '/public')));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use("/", router_1.default);
app.use("/", authRouter_1.default);
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () { });
