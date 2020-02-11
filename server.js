const express = require("express");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8080;

//set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static directory
app.use(express.static("public"));

//routes
require("./routes/api_routes")(app);
require("./routes/html_routes")(app);

//start listening after db is working
db.sequelize.sync({ force:true }).then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});