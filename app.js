var express = require('express');
var app = express();

// config
const config = require('./config')(process.env.ENV);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(config.port, function () {
  console.log('Example app listening on port ' + config.port);
});
