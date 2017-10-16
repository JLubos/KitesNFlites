// -------------------Dependancies -------------//

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var path = require("path");


//
var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//------REQUIRE MODEL FOR SYNCING -----//
//var db = require("./models");

//app.use("/", routes);
// Import routes and give the server access to them.
require("./routes/html-routes.js")(app);

// var routes = require"./controllers/parksController.js

//------LISTENING/STARTING APP ----/
app.listen(PORT, function(){
	console.log("App is listening on PORT " + PORT);
});




/*


//---------------------------SETTING UP OUR NODE SERVER--------------------------//
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

//------SETTTING UP THE EXPRESS APP ------/
var app = express();
app.use(express.static(__dirname +'/public'));



//-----EXPRESS STUFF ------/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



//------ROUTES --------//

//require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


*/