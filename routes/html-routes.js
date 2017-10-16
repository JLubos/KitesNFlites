// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req,res){
  res.sendFile(path.join(__dirname, "../public/index.html"));

  });

  /*app.get("/", function(req,res){
  res.render("index");
  res.render("index",{table_name: res})

});*/


  app.get("/meetup", function(req,res){
  res.sendFile(path.join(__dirname, "../public/meetup.html"));

  });

};


var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.render('index');
})