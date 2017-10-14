//---------------------------SETTING UP OUR NODE SERVER--------------------------//

//---------DEPENDANCIES-------------//
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

//------SETTTING UP THE EXPRESS APP ------/
var app = express();
app.use(express.static(__dirname +'/public'));

var PORT = process.env.PORT || 3000;





app.use(methodOverride('_method'));
app.engine('handlerbars', exphbs({

}));

//------REQUIRE MODEL FOR SYNCING -----//
var db = require("./models");

//-----EXPRESS STUFF ------/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//------LISTENING/STARTING APP ----/
app.listen(PORT, function(){
	console.log("App is listening on PORT " + PORT);
});


//------ROUTES --------//

//require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);