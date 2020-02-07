const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbUrl = require('./constants/config');

const imagesRouter = require('./router/images');

app.use(express.json());
app.use(express.urlencoded({exrtended: false}));
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  // Pass to next layer of middleware
  next();
});


// Images route
app.use('/images', imagesRouter);

// Connetcion to the external DB
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  console.log('mongo db connection', err);
});

const server = app.listen(8000, () => {
  console.log('Server is running on port ', server.address().port);
});
