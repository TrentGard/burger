var connection = require('./connection.js');

var orm = {
	selectAll: function(table, cb){
		connection.query("SELECT * FROM " + table, function(err, data) {
		    if (err) {
		      return res.status(500).end();
		    }
			cb(data);
		});
	}
	// insertOne(),
	// updateOne()
}

module.exports = orm;