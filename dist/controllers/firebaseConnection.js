"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
require("dotenv").config();
const firebaseConfig = {
    apiKey: process.env.FBAPIKEY,
    authDomain: process.env.FBAUTHDOMAIN,
    projectId: process.env.FBPROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.FBMESSAGINGSENDERID,
    appId: process.env.FBAPPID,
    measurementId: process.env.FBMEASUREMENTID
};
const fbAppConnect = (0, app_1.initializeApp)(firebaseConfig);
exports.default = fbAppConnect;
