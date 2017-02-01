var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// config
const config = require('./config')(process.env.ENV);

// routing
const public_index = require('./routes/public/index');
app.use('/', public_index);

const api_task = require('./routes/api/task');
app.use('/api/tasks', api_task);

app.listen(config.port, function () {
  console.log('Example app listening on port ' + config.port);
});
