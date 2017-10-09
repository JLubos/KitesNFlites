DROP DATABASE IF EXISTS UserPark_db;

CREATE DATABASE UserPark_db;

USE UserPark_db;

CREATE TABLE park (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Column for name of parks --
  name VARCHAR(30) NOT NULL,
  -- Column for the best times to go kiting --
  best_time INTEGER(11) NOT NULL,
  -- Column for wind speeds in miles per hour --
  wind_speed INTEGER(10),
  PRIMARY KEY (id)
);