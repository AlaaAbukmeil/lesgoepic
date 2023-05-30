//jshint esversion:6
import { Request, Response, NextFunction } from "express"
import { image } from "./models/image";
import router from "./routes/router";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import authRouter from "./routes/authRouter"

require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const path = require("path");


const firebaseConfig = {
  apiKey: process.env.FBAPIKEY,
  authDomain: process.env.FBAUTHDOMAIN,
  projectId: process.env.FBPROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.FBMESSAGINGSENDERID,
  appId: process.env.FBAPPID,
  measurementId: process.env.FBMEASUREMENTID

};


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(initializeApp(firebaseConfig));


app.use(express.static(path.join(__dirname, '/public')))
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/", router)
// app.use("/", authRouter)
const PORT = process.env.PORT || 8080
app.listen(PORT, function () { })
