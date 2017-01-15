const Bookshelf = require('../bookshelf');
const Task = require('../models/task');
const Promise = require('bluebird');

const TaskCollection = Bookshelf.Collection.extend({
  model: Task,
}, {
  getList: function(){
    return new this()
      .fetch()
      .then (function (collection){
        return collection.toJSON();
      })
      .catch (function (error){
        throw error ;
      });
  }
});

module.exports = TaskCollection;
