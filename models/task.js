'use strict';

const Bookshelf = require('../bookshelf');
const Promise   = require('bluebird');

const Task = Bookshelf.Model.extend({
  tableName: 'tasks'

}, {
});

module.exports = Task;

