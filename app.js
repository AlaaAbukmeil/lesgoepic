//jshint esversion:6
require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const axios = require("axios");
const {
  GoogleSpreadsheet
} = require('google-spreadsheet');
const app = express();

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
  extended: true
}));

const upcomingEventsGoogleSheet = "1k4Oxc8DqL7pSKhklEWqBuJqFlAFlczRzAWVuTu09TC4"
const albumsGoogleSheet ="19gZX57yK_Ch4b_7tCRyWRjpFXDuAXBI-nrjT2tCEVxY"

app.get("/", async function(req, res) {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(upcomingEventsGoogleSheet);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  });

  await doc.loadInfo(); // loads sheets
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  res.render("home", {
    events: rows
  })
});

app.get("/albums",async function(req, res) {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(albumsGoogleSheet);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  });

  await doc.loadInfo(); // loads sheets
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  res.render("albums", {
    albums: rows.reverse()
  })
});

app.get("/termsConditions", function(req, res) {
  res.render("termsConditions")
});

app.get("/feedBackForm", function(req, res) {
  res.render("feedBackForm")
});
app.get("/about-us", function(req, res) {
  res.render("about-us")
});

app.get("/event-register:eventName", async function(req, res) {
  let eventName = req.params.eventName.replace(":", "")
  const doc = new GoogleSpreadsheet(upcomingEventsGoogleSheet);
  let eventDetails;
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  });

  await doc.loadInfo(); // loads sheets
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].name == eventName) {
      eventDetails = rows[i]
    }
  }

  res.render("event-register", {
    eventDetails: eventDetails
  })
});


app.listen(3000, function() {
  console.log("Server started on port 3000.")
})
