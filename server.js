//---------------------------SETTING UP OUR NODE SERVER--------------------------//

//---------DEPENDANCIES-------------//
var express = require("express");
var bodyParser = require("body-parser");

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

