// npm packages/////    express / path / 
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
var port = 3001;

// var PORT = process.env.port;


// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());






app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true} ));
app.use(bodyParser.text());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


app.listen(port, function() {
  console.log("App listening on PORT " + port);
});