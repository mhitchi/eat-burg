// import { sequelize } from "../../../inclass/02/02_11/sequelize_demo/models";

// sequelize.sync();

module.exports = function(sequelize,Datatypes){
  var Burger = sequelize.define("burger", {
    burger_name: Datatypes.STRING,
    devoured: Datatypes.BOOLEAN
  });
  return Burger;
}