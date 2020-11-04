const model = require('../model/customers.js')
var path = require('path');

const postUser = (req, res) => {
  var query;
  if (req.path === '/formOne') {
    query = `INSERT INTO users (name, email, password)
      VALUES ('${req.body.name}',
      '${req.body.email}',
      '${req.body.password}'
      );`;
  } else if (req.path === '/formTwo') {
    query = `UPDATE users
      SET addressOne = '${req.body.addressOne}',
      addressTwo = '${req.body.addressTwo}',
      city = '${req.body.city}',
      state = '${req.body.state}',
      zip = ${req.body.zip},
      tel = ${req.body.tel}
      WHERE id = ${req.body.id};`;
  } else if (req.path === '/formThree') {
    query = `UPDATE users
      SET creditCard = ${req.body.creditCard},
      expiration = ${req.body.expiration},
      cvv = ${req.body.cvv},
      billingZip = ${req.body.billingZip}
      WHERE id = ${req.body.id};`;
  }

  console.log(query);

  model.dbPostUser(req.body, query, (err, results) => {
    if (err) {
      res.sendStatus(404);
      console.log(err);
    } else {
      console.log(results.insertId);
      res.sendStatus(200);
      res.json(results.insertId);
    }
  });
}

module.exports.postUser = postUser;