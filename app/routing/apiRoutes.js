var express = require("express");
var app = express();
var friends = require("../data/friends");

app.get("/api/friends", function(req, res) {
	res.json(friends);
});

app.post("/api/friends", function(req, res) {
	var bestMatch = {
		name: "",
		photo: "",
		score: 100
	};

	var userData = req.body;
	var response = userData.scores;
	// console.log(response);

	for (i = 0; i < friends.length; i++) {
		var total = 0;
		for (j = 0; j < response.length; j++) {
			total += Math.abs(response[j] - friends[i].scores[j]);
		}
		if (total < bestMatch.score) {
			bestMatch.score = total;
			bestMatch.name = friends[i].name;
			bestMatch.photo = friends[i].photo;
		}
	}

	friends.push(userData);

	res.json(bestMatch);
});

module.exports = app;
