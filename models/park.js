// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var park = {
  all: function(cb) {
    orm.all("parks", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("parks", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("parks", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (parkController.js).
module.exports = park;