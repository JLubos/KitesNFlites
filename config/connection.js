var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3000,
	host: "localhost",
	password: "rootpassword",
	database: "UserPark_db"

});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  
}  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;