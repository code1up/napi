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

app.post("/customerprofile", function(request, response) {
	response.header("content-type", "application/json");

	console.dir(request);

	card = request.body.card;
	port = request.body.port;

	if (card === "BADCARD") {
		response.send(400, {
			status: "BADCARD"
		});

		return;
	}

	response.send(200, {
		status: "OK",
		response: {
			card: card,
			port: port
		}
	});
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log(util.format("Listening on %d.", port));
});
