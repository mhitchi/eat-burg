//copied from burger.jss

'use strict';

module.exports = {
  //insert
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('burgers', [
        {
        burger_name: "Cheeseburger",
        devoured: false,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          burger_name: "Veggieburger",
          devoured: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          burger_name: "Baconator",
          devoured: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }  
    ], {});
    
  },

  //delete
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};