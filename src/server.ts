//jshint esversion:6
import authRouter from "./routes/authRouter"
import router from "./routes/router";


require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const path = require("path");



app.use(express.static(path.join(__dirname, '/public')))
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/", router)
app.use("/", authRouter)

const PORT = process.env.PORT || 8080
app.listen(PORT, function () { })
