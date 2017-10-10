//---------------------------SETTING UP OUR NODE SERVER--------------------------//

//---------DEPENDANCIES-------------//
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//------SETTTING UP THE EXPRESS APP ------/
var app = express();
var PORT = process.env.PORT || 3000;

//------REQUIRE MODEL FOR SYNCING -----//
var db = require("./models");

//-----EXPRESS STUFF ------/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//------LISTENING/STARTING APP ----/
app.listen(PORT, function(){
	console.log("App is listening on PORT " + PORT);
});


//static directory
//app.use(express.static("app/public"));


//------ROUTES --------//

//require("./app/routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);



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