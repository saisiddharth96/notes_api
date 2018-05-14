const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const dbURL = require("./config/db.js");
const notePostRoute = require("./routes/index.js");

const dbmLabURL = require("./config/db.js").urlMlab;


const app = express();
const port = 8000 || process.env.PORT;
const dbURI = "mongodb://heroku_g94zw77l:f0d9iv95ffp87vuvcq43ssd9f1@ds221990.mlab.com:21990/heroku_g94zw77l";
{
  /*
      Use this line to get the passed json data from postman 
      
  */
}
// app.use(bodyParser.json())

//To get the data in urlEncoded form
app.use(bodyParser.urlencoded({ extended: true }));

//For local host connection
// MongoClient.connect(dbURL.url, function(err, db) {
//   if (err) return console.log("Error connecting to DB " + err);
//   console.log("Connected to Database");
  
//   notePostRoute(app, db);

//   app.listen(port, function() {
//     console.log("Server started on port " + port);
//   });
// });

//For mLab connection
// MongoClient.connect(dbmLabURL, function(err, db) {
//   if (err) return console.log("Error connecting to DB " + err);
//   console.log("Connected to Database");
  
//   notePostRoute(app, db);

//   app.listen(port, function() {
//     console.log("Server started on port " + port);
//   });
// });
//Test for heroku
MongoClient.connect(process.env.MONGODB_URI || dbURI, function(err, db) {
  if (err) return console.log("Error connecting to DB " + err);
  console.log("Connected to Database");
  notePostRoute(app, db);
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port " + port);
});
