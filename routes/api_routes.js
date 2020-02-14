const db = require("../models");

module.exports = function(app) {
  //GET route for getting all burgs
  app.get("/", function(req,res) {
    db.Burger.findAll({}).then(function(results) {
      
      //sending index.handlebars
      //results passed as obj
      res.render("index", { burgers:results });
      console.log(results);
    });
  });

  //POST route for saving new burg
  app.post("/api/burgers", function(req,res) {
    console.log("api.post working");
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(results) {
      res.end();
    });
  });

  //PUT route for updating burgs to eaten
  app.put("/api/burgers", function(req,res) {
    
  });
}