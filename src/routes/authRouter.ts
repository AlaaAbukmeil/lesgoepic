import { signUpUser, logInUser } from "../controllers/fireBaseAuth";
import { Router } from "express";
import { Request, Response, NextFunction } from "express"
import { getAuth } from "firebase/auth";


require("dotenv").config()

const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoDBStore = require('connect-mongodb-session')(session);


const store = new MongoDBStore(
    {
        uri: "mongodb+srv://lesgoepic:" + process.env.MONGODBPASSWORD + "@lesgoepiccluster.phdxtre.mongodb.net/?retryWrites=true&w=majority",
        databaseName: 'userSessions',
        collection: 'cookies'
    },
    function (error: Error) {
        //   console.log(error)
    });

const authRouter = Router();

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

// authRouter.post("/signUp", async function (req: Request, res: Response, next: NextFunction): Promise<void> {

//     let email = req.body.email
//     let password = req.body.password
//     let user = signUpUser(email, password)
//     if (user != null) {
//         session.user = email
//         console.log(session.providerData)
//     }

//     res.redirect("/")

// })

// authRouter.post("/logIn", async function (req: Request, res: Response, next: NextFunction): Promise<void> {

//     let email = req.body.email
//     let password = req.body.password
//     let user = await logInUser(email, password)
//     if (user != null) {
//         session.user = email
//         console.log(session.providerData)
//     }
//     res.redirect("/")

// })



export default authRouter;
