import { initializeApp } from "firebase/app";

require("dotenv").config()

const firebaseConfig = {
    apiKey: process.env.FBAPIKEY,
    authDomain: process.env.FBAUTHDOMAIN,
    projectId: process.env.FBPROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.FBMESSAGINGSENDERID,
    appId: process.env.FBAPPID,
    measurementId: process.env.FBMEASUREMENTID

};

const fbAppConnect = initializeApp(firebaseConfig);

export default fbAppConnect;