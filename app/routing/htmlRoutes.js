var express = require("express");
var app = express();
var path = require("path");

app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = app;
