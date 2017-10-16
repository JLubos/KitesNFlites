//Import mySQL connection
var connection = require('../config/connection.js');

var orm = {
	all: function(tableInput, cb){
		connection.query('SELECT * FROM ' + tableInput + ':', function(err,result){
			if(err) throw err;
			cb(result)
		})
	},

	update: function(tableInput, condition, cb){
		connection.query('UPDATE ' + tableInput+ 'WHERE id= '+condition+';', function(err,result){
			if (err) throw err;
			cb(result);
		})
	},
	create: function(tableInput, val, cb){
		connection.query('INSERT INTO ' + tableInput+'(parkName) VALUES ("'+val+'");'), //<----
			function(err,result){
				if (err) throw err;
				cb(result);
			}
	}
}

module.exports = orm;