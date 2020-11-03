var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mypass',
  database: 'checkoutusers'
});

module.exports.connection = connection;