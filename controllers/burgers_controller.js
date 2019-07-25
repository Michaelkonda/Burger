// Importing the needed node packages
var express = require("express");
var router = express.Router();

// Importing the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Creating the router for the app
router.get("/", function(req, res) {
	// Pulling all of the burger data
	burger.selectAll(function(data) {
		var burgerObj = {
			burger: data
		};
		console.log(burgerObj);
		// Rendering the data for use in the index.handlebars file
		res.render("index", burgerObj);
	});
});

router.post("/", function(req, res) {
	// Adding the user-inputed burger to the database
	burger.insertOne(
	    ["burger_name"], [req.body.burger_name], function() {
	    // Redirecting to the home page so that the newly added burger is displayed
	    res.redirect("/");
  	});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burger.updateOne({
		eaten: req.body.eaten
	}, condition, function() {
		res.redirect("/");
	});
});

module.exports = router;