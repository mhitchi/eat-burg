// TRIED const db = require("../models/burger");
const db = require("../models");

module.exports = function(app) {
  //GET route for getting all burgs
  // TRIED commenting out. Seems like this isnt the problem.
  app.get("/", function(req,res) {
    db.burger.findAll({}).then(function(results) {
      
      // TODO create array of burger objects??
      res.json(results);
    });
  });

  //POST route for saving new burg
  app.post("/api/burgers", function(req,res) {
    db.burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(results) {
      res.end();
    });
  });

  //PUT route for updating burgs to eaten
  app.put("/api/burgers", function(req,res) {
    
  });
}