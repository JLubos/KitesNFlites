DROP DATABASE IF EXISTS Kites_db;

CREATE DATABASE Kites_db;

USE Kites_db;

-- Creates the table "park" within Kites_db --
CREATE TABLE park (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Column for name of parks --
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

-- Creates the table "meetUp" within Kites_db --
CREATE TABLE meetUp (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  -- Makes a string column called "description" --
  description VARCHAR(30),
  -- Makes an numeric column called "age" --
  age INTEGER(10),
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (id)
);