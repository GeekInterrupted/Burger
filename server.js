var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mysql = require("mysql");

var port = 3000 || env.process.PORT;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

//override POST
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(port);

console.log("listening on port " + port);
