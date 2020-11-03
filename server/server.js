const express = require('express');
const app = express();
const PORT = 3000;
var controller = require('./controller/customers.js');

// this is to ensure we can read the body of incoming requests
app.use(express.json());

app.post('/formOne', controller.postUser);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, (err) => {
  if(err) {
    console.log('error setting up listening post');
  } else {
    console.log(`listening at http://localhost:${PORT}`);
  }
});
