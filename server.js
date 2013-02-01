var util = require("util");
var request = require("request");

// Express.
var express = require("express");

// Create Express app.
var app = express();

app.use(express.bodyParser());
app.use(app.router);

app.get("/", function(request, response) {
	response.header("content-type", "application/json");

	response.send(200, {
		status: "OK"
	});
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log(util.format("Listening on %d.", port));
});
