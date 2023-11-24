"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fireBaseAuth_1 = require("../controllers/fireBaseAuth");
const express_1 = require("express");
require("dotenv").config();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
    uri: "mongodb+srv://lesgoepic:" + process.env.MONGODBPASSWORD + "@lesgoepiccluster.phdxtre.mongodb.net/?retryWrites=true&w=majority",
    databaseName: 'userSessions',
    collection: 'cookies'
}, function (error) {
    //   console.log(error)
});
const authRouter = (0, express_1.Router)();
authRouter.use(cookieParser());
authRouter.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    store: store,
    cookie: {
        maxAge: 6000000,
    },
    rolling: true
}));
authRouter.get("/myAccount", function (req, res) {
    res.render("myAccount", {
        signUpDisplay: "block",
        logInDisplay: "none",
        error: "200"
    });
});
authRouter.post("/signUp", async function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    let user = (0, fireBaseAuth_1.signUpUser)(email, password);
    if (user == null) {
        res.render("/myAccount", { error: "200" });
    }
    res.redirect("/");
});
authRouter.post("/logIn", async function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    let user = await (0, fireBaseAuth_1.logInUser)(email, password);
    console.log(user);
    if (user == null) {
        res.render("myAccount", {
            error: "404",
            signUpDisplay: "none",
            logInDisplay: "block"
        });
    }
    else {
        res.redirect("/");
    }
});
authRouter.post("/logOut", async (req, res, next) => {
    let result = await (0, fireBaseAuth_1.logOutUser)();
    if (result) {
        res.render("/myAccount");
    }
    else {
        res.redirect("/");
    }
});
exports.default = authRouter;
