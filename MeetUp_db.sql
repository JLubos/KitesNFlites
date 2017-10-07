DROP DATABASE IF EXISTS MeetUp_db;
-- Creates the "MeetUp_db" database --
CREATE DATABASE MeetUp_db;

-- Makes it so all of the following code will affect MeetUp_db --
USE MeetUp_db;

-- Creates the table "people" within animals_db --
CREATE TABLE MeetUp (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  -- Makes a string column called "description" --
  description VARCHAR(30),
  -- Makes a boolean column called "has_kite" which cannot contain null --
  has_kite BOOLEAN NOT NULL,
  -- Makes an numeric column called "age" --
  age INTEGER(10),
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (id)
);