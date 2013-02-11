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

	var originalRequest = {
		device: request.body.device,
		port: request.body.port,
		profile: request.body.profile,
		userid: request.body.userid,
		linemode: request.body.linemode,
		inp_down: request.body.inp_down,
		inp_up: request.body.inp_up
	};

	if (originalRequest.userid === "BADUSER") {
		response.send(400, {
			status: "BADUSER"
		});

		return;
	}

	response.send(200, {
		status: "YAY",
		originalRequest: originalRequest
	});
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log(util.format("Listening on %d.", port));
});
