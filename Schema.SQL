CREATE DATABASE checkoutusers;

USE checkoutusers;

CREATE TABLE users (
  id INT(12) NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  email VARCHAR(20) NOT NULL,
  password  VARCHAR(20) NOT NULL,
  addressOne VARCHAR(20) NOT NULL,
  addressTwo VARCHAR(20) NOT NULL,
  city VARCHAR(20) NOT NULL,
  state VARCHAR(20) NOT NULL,
  zip INT(11) NOT NULL,
  tel INT(11) NOT NULL,
  creditCard INT(18) NOT NULL,
  expiration DATE NOT NULL,
  cvv INT (4) NOT NULL,
  billingZip INT(11) NOT NULL,
  PRIMARY KEY (id)
);