const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8080;

//set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up handlebars
//TODO NOT WORKING
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//static directory
app.use(express.static("public/assets"));

//routes
require("./routes/api_routes")(app);
require("./routes/html_routes")(app);


//start listening after db is working
db.sequelize.sync({ force:true }).then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});