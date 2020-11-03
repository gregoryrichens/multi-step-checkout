const model = require('../model/customers.js')

const postUser = (req, res) => {
  console.log(req.body);
  console.log(req.data);
  // create the query strings here and pass them to dbPostUser as an argument??
  // how do I find the referring path?
  var query;
  if (req.path === '/formOne') {
    query = 'query with key value pairs from form one';
  } else if (req.path === '/formTwo') {
    query = 'query with key value pairs from form';
  } else if (req.path === '/formThree') {
    query = 'query with key value pairs from form';
  }

  model.dbPostUser(req.body, (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
      console.log(results);
      // res.json(results);
      // test what restults look like and then SEND ID back to client
    }
  });
}

module.exports.postUser = postUser;