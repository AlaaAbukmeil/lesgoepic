"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminData_1 = require("../controllers/adminData");
const fireBaseAuth_1 = __importDefault(require("../controllers/fireBaseAuth"));
require("dotenv").config();
const router = (0, express_1.Router)();
const path = require("path");
const multerGoogleStorage = require("multer-google-storage");
const multer = require('multer');
var uploadScreenshot = multer({
    storage: multerGoogleStorage.storageEngine({
        autoRetry: true,
        bucket: process.env.BUCKET,
        projectId: process.env.PROJECTID,
        keyFilename: process.env.KEYPATHFILE,
        filename: (req, file, cb) => {
            cb(false, `/screenshotsTransactions/${Date.now()}_${file.originalname}`);
        }
    })
});
router.get("/", async function (req, res, next) {
    let events = await (0, adminData_1.fetchEvents)();
    let scheduleInfo = await (0, adminData_1.getScheduleInfo)();
    let registered = req.query.registered;
    let thankYouMessage = false;
    let username = fireBaseAuth_1.default.currentUser;
    if (username) {
        console.log(username.email);
    }
    if (registered) {
        thankYouMessage = true;
    }
    res.render("home", {
        events: events,
        scheduleInfo: scheduleInfo,
        thankYouMessage: thankYouMessage
    });
});
router.get("/albums", async function (req, res, next) {
    let albums = await (0, adminData_1.fetchAlbums)();
    res.render("albums", {
        albums: albums
    });
});
router.get("/termsConditions", function (req, res) {
    res.render("termsConditions");
});
router.get("/termsConditions", function (req, res) {
    res.render("termsConditions");
});
router.get("/feedBackForm", function (req, res) {
    res.render("feedBackForm");
});
router.get("/about-us", function (req, res) {
    res.render("about-us");
});
router.get("/blog", async function (req, res, next) {
    let posts = await (0, adminData_1.fetchPosts)();
    res.render("blog", {
        posts: posts
    });
});
router.get("/.well-known/assetlinks.json", function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(path.normalize(__dirname + '/assetslink.json'));
});
router.get("/register:eventId", async function (req, res, next) {
    let eventId = req.params.eventId.replace(":", "");
    let eventDetails = await (0, adminData_1.getEventInfo)(eventId);
    if (eventDetails.display != "true") {
        res.render("eventRegistrationClosed");
    }
    else {
        res.render("registerEvent", {
            eventDetails: eventDetails
        });
    }
});
router.get("/post:postId", async function (req, res, next) {
    let postId = req.params.postId.replace(":", "");
    let post = await (0, adminData_1.getPostInfo)(postId);
    res.render("post", {
        postInfo: post
    });
});
router.post("/register:eventId", uploadScreenshot.any(), async function (req, res, next) {
    let eventId = req.params.eventId.replace(":", "");
    let eventInfo = await (0, adminData_1.getEventInfo)(eventId);
    let response = JSON.parse(JSON.stringify(req.body));
    if (!response["timeslot"]) {
        response["timeslot"] = "null";
    }
    if (!response["photoProofLink"]) {
        response["photoProofLink"] = "null";
    }
    if (!req.files[0]) {
        (0, adminData_1.registerParticipant)(eventInfo, response);
        // console.log(response)
        res.redirect("/?registered=true");
    }
    else {
        let proofPath = "https://storage.googleapis.com/lesgoepicadmin.appspot.com" + req.files[0].filename;
        response["photoProofLink"] = proofPath;
        (0, adminData_1.registerParticipant)(eventInfo, response);
        res.redirect("/?registered=true");
    }
});
exports.default = router;
