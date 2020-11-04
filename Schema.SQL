CREATE DATABASE checkoutusers;

USE checkoutusers;

CREATE TABLE users (
  id INT(12) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password  VARCHAR(50) NOT NULL,
  addressOne VARCHAR(50) NOT NULL DEFAULT '',
  addressTwo VARCHAR(50) NOT NULL DEFAULT '',
  city VARCHAR(50) NOT NULL DEFAULT '',
  state VARCHAR(50) NOT NULL DEFAULT '',
  zip INT(11),
  tel INT(11),
  creditCard INT(18),
  expiration DATE,
  cvv INT (4),
  billingZip INT(11),
  PRIMARY KEY (id)
);