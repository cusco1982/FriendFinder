// npm packages/////    express / path / 
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
// var port = 3000;

var port = process.env.port || 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true} ));
app.use(bodyParser.text());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


app.listen(port, function() {
  console.log("App listening on PORT ",  port);
});