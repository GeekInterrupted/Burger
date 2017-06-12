//set up mysql connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "TimpfSQL81013##Torchwood",
    database: "burgers_db"
});

//make the connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//export the connection for ORM
module.exports = connection;