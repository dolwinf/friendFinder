var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
