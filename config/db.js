const secrets = require("../secrets/config.js")

const dbUser = secrets.dbUserName;
const dbPassword = secrets.dbPassword;

module.exports = {
    //Change to the required database by changing the database name after 27017/xxxxx
    url : "mongodb://localhost:27017/SampleApp" ,
    urlMlab : "mongodb://" + dbUser + ":"+dbPassword+"@ds119090.mlab.com:19090/notes-taking-app"  
}