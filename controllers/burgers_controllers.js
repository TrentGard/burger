var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function (req, res) {
	burger.selectAll(function(data){
		console.log(data);
	});
    res.render("index", { burgers_db });
});

// router.get('/burger', function(req, res){
// 	res.render('index');
// });

// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM burgers_db;", function(err, data) {
//     if (err) {
//       return res.status(500).end();
//     }
//     res.render("index", { burgers_db: data });
//   });
// });

module.exports = router;