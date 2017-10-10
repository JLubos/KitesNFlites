

// Meet up api key: 71c37335647287d601a305e7c593451
// Shopify api key: 2f6e393b8d09862fb48f74e539012a16


var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });



 $.ajax

 /*app.get("/", function(req,res){
	res.render("index");
	res.render("index",{table_name: res})



});*/


// req.params.characters
//app.get"/:characters



/*


// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Specify the port.
var PORT = process.env.PORT || 3000;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpassword",
  database: "wizard_schools_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

*/


//---------------------Connection Query example-----------------//

/*

app.get("/coolness-chart", function(req, res) {
  connection.query("SELECT * FROM actors order by coolness_points DESC", function(err, result) {
    var html = "<h1>Actors by Coolness</h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p> Name: " + result[i].name + "</p>";
      html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
      html += "<p>Attitude: " + result[i].attitude + "</p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});

*/


/*

connection.query("INSERT INTO tasks (task) VALUES (?)", [req.body.task], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});

*/




// API CALL
/*

var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });



*/