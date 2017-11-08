var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require("./controllers/burgers_controllers");
app.use("/", router);

// app.get("/burger", function(req, res) {
//   
//     res.render("index", { burgers_db: data });
//   });
// });

// app.post("/burger", function(req, res) {
//   connection.query("INSERT INTO burgers_db (burger_type) VALUES (?)", [req.body.burger_type], function(err, result) {
//     if (err) {
//       return res.status(500).end();
//     }

//     // Send back the ID of the new burger
//     res.json({ id: result.insertId });
//     console.log({ id: result.insertId });
//   });
// });

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});