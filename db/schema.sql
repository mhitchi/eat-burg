-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affect burgers_db --
USE burgers_db;

-- Creates the table "burgers" within burgers_db --
CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT,
  burger_name VARCHAR(30),
  devoured BOOLEAN DEFAULT (false),
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO burgers (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", TRUE, "Rockington", 100);