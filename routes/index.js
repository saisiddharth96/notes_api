const noteRoutes = require("./note-routes.js");

module.exports = function(app,db){
    noteRoutes(app,db);
}