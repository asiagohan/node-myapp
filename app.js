var express = require('express');
var app = express();

// config
const config = require('./config')(process.env.ENV);

// routing
const public_index = require('./routes/public/index');
app.use('/', public_index);

app.listen(config.port, function () {
  console.log('Example app listening on port ' + config.port);
});
