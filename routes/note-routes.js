const ObjectID = require("mongodb").ObjectID;

module.exports = function(app, db) {
  //Read Operation
  app.get("/notes/:id", function(req, res) {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };

    db.collection("notes").findOne(details, function(err, result) {
      if (err) {
        res.send({ error: "Couldnt retrieve the note" });
      } else {
        res.send(result);
      }
    });
  });

  //Creating a new Post
  app.post("/notes", function(req, res) {
    console.log(req.body);
    // res.send("Acknowledged!")
    const note = {
      text: req.body.text,
      title: req.body.title,
      createdAt: new Date(),
      lastEdited: null
    };
    db.collection("notes").insert(note, function(err, result) {
      if (err) {
        res.send({ Error: "Some error occurred while saving data" });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.delete("/notes/:id", function(req, res) {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };

    db.collection("notes").remove(details, function(err, result) {
      if (err) {
        res.send({ error: "Error occurred while deleting the note" });
      } else {
        res.send("Note " + id + " deleted");
      }
    });
  });

  //Updating a note
app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = {$set: { text: req.body.body, title: req.body.title, lastEdited : new Date() }};
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      } 
    });
  });

  app.get("/", function(res,res){
    res.send("Welcome to the API!").status(200);
  });
};
