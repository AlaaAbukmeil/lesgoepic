// app.post("/emailSubscribe", async function(req, res) {
//   const email = req.body.emailSubscribe
//   const doc = new GoogleSpreadsheet(masterListGoogleSheet);
//   await doc.useServiceAccountAuth({
//     client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//     private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
//   });
//   await doc.loadInfo();
//   const sheet = doc.sheetsByIndex[0];
//   await sheet.addRow({ email: email });
//   res.redirect("/")
//
// })
// const upcomingEventsGoogleSheet = "1k4Oxc8DqL7pSKhklEWqBuJqFlAFlczRzAWVuTu09TC4"
// const masterListGoogleSheet = "1VJPv71k1Ix1cVLUQF-5Ix7uVdpMp2Xhbf8LKmjWHQjo"
//
