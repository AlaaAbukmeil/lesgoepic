"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostInfo = exports.getScheduleInfo = exports.fetchPosts = exports.registerParticipant = exports.getEventInfo = exports.fetchAlbums = exports.fetchEvents = void 0;
require("dotenv").config();
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lesgoepic:" + process.env.MONGODBPASSWORD + "@lesgoepiccluster.phdxtre.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function fetchEvents() {
    try {
        const database = client.db("upcomingevents");
        const eventsCollection = database.collection("events");
        const query = {
            display: "false"
        };
        const options = {
            // sort returned documents in ascending order by title (A->Z)
            sort: {
                order: 1
            }
        };
        const events = await eventsCollection.find(query, options);
        let eventsJson = [];
        for await (const doc of events) {
            eventsJson.push(doc);
        }
        return eventsJson;
    }
    finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
exports.fetchEvents = fetchEvents;
async function fetchAlbums() {
    try {
        const database = client.db("media");
        const albumsCollection = database.collection("albums");
        const albums = await albumsCollection.find().sort({
            order: -1
        });
        let albumsJson = [];
        for await (const doc of albums) {
            albumsJson.push(doc);
        }
        // console.log(albumsJson)
        return albumsJson;
    }
    finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
exports.fetchAlbums = fetchAlbums;
async function getEventInfo(id) {
    try {
        const database = client.db("upcomingevents");
        const eventCollection = database.collection("events");
        const query = {
            _id: new ObjectId(id)
        };
        const eventInfo = await eventCollection.findOne(query);
        return eventInfo;
    }
    finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
exports.getEventInfo = getEventInfo;
async function registerParticipant(eventInfo, info) {
    const database = client.db("form");
    const responsesCollection = database.collection("responses");
    let response = {};
    response["eventId"] = eventInfo["_id"];
    response["eventName"] = eventInfo["name"];
    response["eventDate"] = eventInfo["date"];
    response["eventCost"] = eventInfo["cost"];
    response["submissionTime"] = new Date();
    // console.log(info)
    const updateDoc = {
        ...response, ...info
    };
    const action = await responsesCollection.insertOne(updateDoc);
}
exports.registerParticipant = registerParticipant;
async function fetchPosts() {
    try {
        const database = client.db("blog");
        const postsCollection = database.collection("posts");
        const posts = await postsCollection.find().sort({
            order: -1
        });
        let postsJson = [];
        for await (const doc of posts) {
            postsJson.push(doc);
        }
        // console.log(postsJson)
        return postsJson;
    }
    finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
exports.fetchPosts = fetchPosts;
async function getScheduleInfo() {
    try {
        const database = client.db("schedule");
        const scheduleCollection = database.collection("file");
        const query = {
            _id: new ObjectId("6474717f3ca184eb978e3e61")
        };
        const scheduleInfo = await scheduleCollection.findOne(query);
        return scheduleInfo;
    }
    finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
exports.getScheduleInfo = getScheduleInfo;
async function getPostInfo(id) {
    try {
        const database = client.db("blog");
        const postCollection = database.collection("posts");
        const query = {
            _id: new ObjectId(id)
        };
        const postInfo = await postCollection.findOne(query);
        return postInfo;
    }
    finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
exports.getPostInfo = getPostInfo;
