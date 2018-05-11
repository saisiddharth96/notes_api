const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const dbURL = require("./config/db.js");
const notePostRoute = require("./routes/index.js");


const app = express();
const port = 8000 || process.env.PORT;

{
  /*
      Use this line to get the passed json data from postman 
      //app.use(bodyParser.json())
  */
}

//To get the data in urlEncoded form
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(dbURL.url, function(err, db) {
  if (err) return console.log("Error connecting to DB " + err);
  console.log("Connected to Database");
  
  notePostRoute(app, db);

  app.listen(port, function() {
    console.log("Server started on port " + port);
  });
});
