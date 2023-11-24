import { Router } from "express";
import { Request, Response, NextFunction } from "express"
import {
    fetchEvents, fetchAlbums,
    registerParticipant, getEventInfo,
    fetchPosts, getScheduleInfo,
    getPostInfo
} from "../controllers/adminData"
import { image } from "../models/image";
import { eventInfo } from "../models/eventInfo";
import { albumInfo } from "../models/albumInfo";
import { postInfo } from "../models/postInfo";
import { scheduleInfo } from "../models/scheduleInfo";
import auth from "../controllers/fireBaseAuth"
import { user } from "../models/user";

require("dotenv").config()
const router = Router();
const path = require("path")
const multerGoogleStorage = require("multer-google-storage");
const multer = require('multer')
var uploadScreenshot = multer({
    storage: multerGoogleStorage.storageEngine({
        autoRetry: true,
        bucket: process.env.BUCKET,
        projectId: process.env.PROJECTID,
        keyFilename: process.env.KEYPATHFILE,
        filename: (req: Request, file: image, cb: (err: boolean, fileName: string) => void) => {
            cb(false, `/screenshotsTransactions/${Date.now()}_${file.originalname}`);
        }
    })
});

router.get("/", async function (req: any, res: Response, next: NextFunction): Promise<void> {
    let events: eventInfo[] = await fetchEvents();
    let scheduleInfo: scheduleInfo = await getScheduleInfo();
    let registered: boolean|null = req.query.registered
    let thankYouMessage : boolean = false
    let username: any = auth.currentUser
    if(username){
        console.log(username.email)
    } 
    if (registered) {
        thankYouMessage = true
    }
    res.render("home", {
        events: events,
        scheduleInfo: scheduleInfo,
        thankYouMessage: thankYouMessage
    })
});

router.get("/albums", async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    let albums: albumInfo[] = await fetchAlbums()
    res.render("albums", {
        albums: albums
    })
});

router.get("/termsConditions", function (req: Request, res: Response): void {
    res.render("termsConditions")
});

router.get("/termsConditions", function (req: Request, res: Response): void {
    res.render("termsConditions")
});

router.get("/feedBackForm", function (req: Request, res: Response): void {
    res.render("feedBackForm")
});

router.get("/about-us", function (req: Request, res: Response): void {
    res.render("about-us")
});

router.get("/blog", async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    let posts: postInfo[] = await fetchPosts()
    res.render("blog", {
        posts: posts
    })
});

router.get("/.well-known/assetlinks.json", function (req: Request, res: Response): void {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(path.normalize(__dirname + '/assetslink.json'))
});

router.get("/register:eventId", async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    let eventId: string = req.params.eventId.replace(":", "")
    let eventDetails: eventInfo = await getEventInfo(eventId)
    if (eventDetails.display != "true") {
        res.render("eventRegistrationClosed")
    } else {
        res.render("registerEvent", {
            eventDetails: eventDetails
        })
    }
});

router.get("/post:postId", async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    let postId: string = req.params.postId.replace(":", "")
    let post: postInfo = await getPostInfo(postId)
    res.render("post", {
        postInfo: post
    })
});

router.post("/register:eventId", uploadScreenshot.any(), async function (req: Request | any, res: Response, next: NextFunction): Promise<void> {
    let eventId: string = req.params.eventId.replace(":", "")
    let eventInfo: eventInfo = await getEventInfo(eventId)
    let response = JSON.parse(JSON.stringify(req.body))
    if (!response["timeslot"]) {
        response["timeslot"] = "null"
    }
    if (!response["photoProofLink"]) {
        response["photoProofLink"] = "null"
    }
    if (!req.files[0]) {
        registerParticipant(eventInfo, response)
        // console.log(response)
        res.redirect("/?registered=true")

    } else {
        let proofPath = "https://storage.googleapis.com/lesgoepicadmin.appspot.com" + req.files[0].filename
        response["photoProofLink"] = proofPath
        registerParticipant(eventInfo, response)
        res.redirect("/?registered=true")
    }
}
);


export default router; 