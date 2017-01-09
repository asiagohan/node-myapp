const config     = require('./config')(process.env.ENV)
const knexconfig = require('./knexfile');
const knex       = require('knex')(knexconfig[config.env]);

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
