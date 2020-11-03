var controller = require('../controller/customers.js');
const db = require('../db/connection.js');

db.connection.connect(function(err) {
  if(err) {
    console.error('error connecting:' + err.stack);
    return;
  } else {
    console.log('connected as id:' + db.connection.threadId);
  }
});

const dbPostUser = (data, callback) => {
  // do we need a separate post function for each
  db.connection.query(queryString, (err, results) => {
    if (err) {
      callback(err);
    } else {
      console.log('post successful');
      callback(null, results);
    }
  });
}

module.exports.dbPostUser = dbPostUser;